<template>
    <div class="wrapper-content wrapper-content--fixed">

      <section>
        <div class="container">
            <div class="product__wrapper">
                <div class="product-slider">
                    <img :src="product.img" :alt="product.title">
                </div>
                <h1> {{product.title}} </h1>
                <p> {{product.descr}} </p>
            </div>
        </div>
      </section>

    </div>
</template>

<script>
export default {
    data () {
        return {
            product: null
        }
    },
    created () {
        // console.log(this.$route);
        let id = this.$route.params.id
        this.product = this.$store.getters.getProduct(id)
        console.log(product);
    }
}
</script>
