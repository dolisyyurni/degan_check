"use client";

import { useState } from "react";
import { useActionState } from "react";
import { SignInButton, Show } from "@clerk/nextjs";
import type { Product } from "@/sanity.types";
import { submitProductReview, type ReviewActionState } from "@/app/(client)/product/[slug]/actions";

type ProductInfoTabsProps = {
  product: Product;
  slug: string;
  reviews?: ProductReview[];
};

type ProductReview = {
  _id: string;
  authorName?: string;
  rating?: number;
  comment?: string;
  _createdAt?: string;
};

const tabs = ["Description", "Additional Information", "Reviews"] as const;
type Tab = (typeof tabs)[number];

const initialReviewState: ReviewActionState = { status: "idle", message: "" };

export default function ProductInfoTabs({ product, slug, reviews = [] }: ProductInfoTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("Description");
  const [reviewState, reviewAction, isPending] = useActionState(submitProductReview, initialReviewState);

  return (
    <section className="w-full" aria-label="Product information">
      <div className="flex w-full overflow-hidden rounded-lg bg-gray-100" role="tablist" aria-label="Product details">
        {tabs.map((tab) => (
          <button
            key={tab}
            id={`product-tab-${tab.replaceAll(" ", "-").toLowerCase()}`}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls="product-tab-panel"
            onClick={() => setActiveTab(tab)}
            className={`flex-1 rounded-lg px-3 py-3 text-base font-semibold transition-colors ${
              activeTab === tab
                ? "bg-white text-shop_dark_green shadow-sm border border-darkColor/10" : "text-gray-500 hover:text-shop_dark_green"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        id="product-tab-panel"
        role="tabpanel"
        aria-labelledby={`product-tab-${activeTab.replaceAll(" ", "-").toLowerCase()}`}
        className="min-h-40 py-6 text-sm leading-7 text-gray-600"
      >
        {activeTab === "Description" && (
          <p className="whitespace-pre-line text-gray-500 text-sm">
            {product.description || "Product description is not yet available."}
          </p>
        )}

        {activeTab === "Additional Information" && (
          <dl className="divide-y divide-gray-200 border-y border-gray-200 justify-center">
            <div className="flex justify-between gap-6 py-3">
              <dt className="font-medium text-gray-800">Type</dt>
              <dd className="capitalize">{product.variant || "—"}</dd>
            </div>
            <div className="flex justify-between gap-6 py-3">
              <dt className="font-medium text-gray-800">Category</dt>
              <dd>{product.category?.length ? `${product.category.length} kategori` : "—"}</dd>
            </div>
            <div className="flex justify-between gap-6 py-3">
              <dt className="font-medium text-gray-800">Availability</dt>
              <dd>{(product.stock ?? 0) > 0 ? "In stock" : "Out of stock"}</dd>
            </div>
          </dl>
        )}

        {activeTab === "Reviews" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Customer Reviews ({reviews.length})</h3>
              {reviews.length === 0 ? (
                <p className="text-sm text-gray-600 tracking-wide">Belum ada ulasan untuk produk ini. Jadilah yang pertama memberi ulasan.</p>
              ) : (
                <ul className="mt-4 divide-y divide-gray-200">
                  {reviews.map((review) => (
                    <li key={review._id} className="py-4">
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-semibold text-gray-900">{review.authorName || "Customer"}</p>
                        <p className="text-amber-500" aria-label={`${review.rating ?? 0} dari 5 bintang`}>
                          {"★".repeat(Math.min(5, Math.max(0, review.rating ?? 0)))}{"☆".repeat(5 - Math.min(5, Math.max(0, review.rating ?? 0)))}
                        </p>
                      </div>
                      {review._createdAt && (
                        <time className="text-xs text-gray-500" dateTime={review._createdAt}>
                          {new Intl.DateTimeFormat("id-ID", { dateStyle: "medium" }).format(new Date(review._createdAt))}
                        </time>
                      )}
                      <p className="mt-2 whitespace-pre-line">{review.comment}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900">Tulis ulasan</h3>
              <Show when="signed-in">
                <form action={reviewAction} className="mt-4 space-y-4">
                  <input type="hidden" name="productId" value={product._id} />
                  <input type="hidden" name="slug" value={slug} />
                  <label className="block text-sm font-medium text-gray-800" htmlFor="review-rating">
                    Rating
                    <select
                      id="review-rating"
                      name="rating"
                      required
                      defaultValue="5"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2"
                    >
                      <option value="5">5 - Sangat baik</option>
                      <option value="4">4 - Baik</option>
                      <option value="3">3 - Cukup</option>
                      <option value="2">2 - Kurang</option>
                      <option value="1">1 - Buruk</option>
                    </select>
                  </label>
                  <label className="block text-sm font-medium text-gray-800" htmlFor="review-comment">
                    Ulasan
                    <textarea
                      id="review-comment"
                      name="comment"
                      required
                      minLength={10}
                      maxLength={1000}
                      rows={4}
                      placeholder="Ceritakan pengalaman Anda dengan produk ini (10–1000 karakter)."
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="rounded  px-5 bg-shop_dark_green/80 text-lightBg shadow-none border border-shop_dark_green/80 font-semibold tracking-wide text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect"
                  >
                    {isPending ? "Mengirim..." : "Kirim ulasan"}
                  </button>
                  {reviewState.message && (
                    <p role="status" className={reviewState.status === "error" ? "text-red-600" : "text-green-700"}>
                      {reviewState.message}
                    </p>
                  )}
                </form>
              </Show>
              <Show when="signed-out">
                <p className="mt-2">
                  <SignInButton mode="modal">
                    <button type="button" className="text-gray-500 underline underline-offset-2 hover:text-shop_light_green">
                      Login untuk menulis ulasan
                    </button>
                  </SignInButton>
                </p>
              </Show>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
