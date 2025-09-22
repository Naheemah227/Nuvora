<template>
  <section class="faq-section">
    <div class="container">
      <h2>Frequently Asked Questions</h2>
      <p>Find answers to the most common questions below</p>

      <details class="w-100 h-100 p-4 text-center">
        <summary class="">How do I place an order</summary>
        <p class="p-5">
          "You can place an order by selecting products and adding them to your
          cart. Then proceed to checkout." ,
        </p>
      </details>

      <details class="w-100 h-100 p-4 text-center">
        <summary class="">What payment methods are available?</summary>
        <p class="p-5">
          "We accept all major credit cards, debit cards,PayPal or Transfers
        </p>
      </details>

      <details class="w-100 h-100 p-4 text-center">
        <summary class="">
          How long will it take to recieve my order after making payment
        </summary>
        <p class="p-5">
          It take typically three to five days for delivery after payment has
          been made ,Location also varies
        </p>
      </details>

      <details class="w-100 h-100 p-4 text-center">
        <summary class="">Can i pay on Delivery</summary>
        <p class="p-5">No</p>
      </details>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.faq-section {
  padding: 4rem 2rem;
  background: #f9fff6; /* soft green background */
  text-align: center;
}

.faq-section h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #006400; /* primary green */
}

.faq-section p {
  margin-bottom: 2rem;
  color: #555;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.faq-item {
  border-bottom: 1px solid #e6e6e6;
  padding: 1rem 0;
}

.question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #006400; /* primary green */
  font-weight: 600;
}

.question h4 {
  margin: 0;
  font-size: 1.2rem;
}

.icon {
  font-size: 1.5rem;
  color: #d4af37; /* accent gold */
  font-weight: bold;
}

.answer {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #333;
}

/* Smooth slide-down animation */
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.slide-enter-to,
.slide-leave-from {
  max-height: 500px; /* enough for most answers */
  opacity: 1;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

details {
  background: var(--primary-green);
}
details p {
  font: optional;
  font-size: large;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  max-height: 500px;
}

details summary {
  color: var(--accent-gold);
  background: var(--primary-green);
}
</style>
