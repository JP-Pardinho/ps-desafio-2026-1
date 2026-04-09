"use client";

import Image from "next/image";
import styles from "./productCard.module.css";
import { sportsItemType } from "@/types/sportsItem";
import { ProductModal } from "./ProductModal";

export default function ProductCard(sportItem: sportsItemType) {
  const fallbackImage = "https://picsum.photos/300/200?random=" + sportItem?.id;
  const priceMask = Number(sportItem?.price).toFixed(2).replace(".", ",");

  return (
    <ProductModal product={sportItem}>
      <div className={styles.productCard}>
        <div className={styles.productLink}>
          <Image
            className={styles.productImage}
            src={sportItem?.image || fallbackImage}
            alt={sportItem?.name}
            width={300}
            height={200}
          />
        </div>
        <span className={styles.productStock}>
          {sportItem?.amount} em estoque
        </span>
        <h1 className={styles.productName}>{sportItem?.name}</h1>
        <p className={styles.productCategory}>{sportItem?.category.name}</p>
        <p className={styles.productPrice}>R$ {priceMask}</p>
      </div>
    </ProductModal>
  );
}
