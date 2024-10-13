<template>
    <div ref="razorpayBtn"></div>
  </template>
  
  <script>
  export default {
    name: 'RazorpayButton',
    props: {
      paymentButtonId: {
        type: String,
        required: true
      }
    },
    mounted() {
      this.loadRazorpayScript();
    },
    methods: {
      loadRazorpayScript() {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.async = true;
        script.dataset.payment_button_id = this.paymentButtonId;
        this.$refs.razorpayBtn.appendChild(script);
      }
    }
  }
  </script>