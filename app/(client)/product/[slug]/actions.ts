"use server";

import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export type ReviewActionState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitProductReview(
  _previousState: ReviewActionState,
  formData: FormData,
): Promise<ReviewActionState> {
  const user = await currentUser();
  if (!user) {
    return { status: "error", message: "Silakan login untuk mengirim ulasan." };
  }

  const productId = formData.get("productId");
  const slug = formData.get("slug");
  const ratingValue = Number(formData.get("rating"));
  const commentValue = formData.get("comment");

  if (
    typeof productId !== "string" ||
    !/^[-\w.]+$/.test(productId) ||
    typeof slug !== "string" ||
    !/^[\w-]+$/.test(slug)
  ) {
    return { status: "error", message: "Produk tidak valid." };
  }
  if (!Number.isInteger(ratingValue) || ratingValue < 1 || ratingValue > 5) {
    return { status: "error", message: "Pilih rating antara 1 sampai 5." };
  }
  if (typeof commentValue !== "string") {
    return { status: "error", message: "Tulis ulasan terlebih dahulu." };
  }

  const comment = commentValue.trim();
  if (comment.length < 10 || comment.length > 1000) {
    return { status: "error", message: "Ulasan harus terdiri dari 10 sampai 1000 karakter." };
  }

  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) {
    return {
      status: "error",
      message: "Fitur ulasan belum dikonfigurasi. Tambahkan SANITY_API_WRITE_TOKEN di environment server.",
    };
  }

  const writeClient = createClient({ projectId, dataset, apiVersion, useCdn: false, token });
  const productExists = await writeClient.fetch(
    `*[_type == "product" && _id == $productId][0]._id`,
    { productId },
  );
  if (!productExists) {
    return { status: "error", message: "Produk tidak ditemukan." };
  }

  const authorName = [user.firstName, user.lastName].filter(Boolean).join(" ") || user.username || "Customer";
  try {
    await writeClient.create({
      _type: "review",
      product: { _type: "reference", _ref: productId },
      clerkUserId: user.id,
      authorName,
      rating: ratingValue,
      comment,
    });
  } catch {
    return { status: "error", message: "Ulasan gagal disimpan. Coba lagi beberapa saat." };
  }

  revalidatePath(`/product/${slug}`);
  return { status: "success", message: "Terima kasih, ulasan Anda berhasil dikirim." };
}
