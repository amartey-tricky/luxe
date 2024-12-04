"use client";

import { ContactSchema, type ContactData } from "@/util/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import styles from "./index.module.css";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({
    resolver: zodResolver(ContactSchema),
    });

  const onSubmit = (data: ContactData) => {
    console.log(data);
    toast.success("Message sent!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          className={styles.input}
          placeholder="Jane Doe"
        />
        {errors.name && (
          <p className={styles.error}>{errors.name.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          className={styles.input}
          placeholder="jane.doe@example.com"
        />
        {errors.email && (
          <p className={styles.error}>{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea
          id="message"
          {...register("message", { required: true })}
          className={styles.input}
          placeholder="Hello, how are you?"
        />
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}
      </div>
      <button type="submit" disabled={isSubmitting} className={styles.button}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
