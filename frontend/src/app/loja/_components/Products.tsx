"use client";

import { sportsItemType } from "@/types/sportsItem";
import styles from "./products.module.css";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

export default function Products() {
  const [sportsItems, setSportsItems] = useState<sportsItemType[]>([]);

  useEffect(() => {
    async function getSportsItems() {
      const { response, error } = await api("GET", "/products");

      if (response) {
        setSportsItems(response as sportsItemType[]);
      } else {
        console.error(error?.message);
      }
    }

    getSportsItems();
  }, []);

  return (
    <section className="products" id="products">
      <div className={styles.container}>
        <h1 id="produtos" className={styles.title}>
          NOSSOS PRODUTOS
        </h1>
        <div className={styles.productList}>
          {sportsItems.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
