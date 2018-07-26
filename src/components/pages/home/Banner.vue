<template>
	<div class="swiper-container banner">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" 
	        	v-for="banner in banners"
	        	:key="banner.id">
	        		<img :src="banner.imageUrl">
	        	</div>
	    </div>
	</div>
</template>

<script>
	import axios from "axios";
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.min.css";
	export default {
		name:"Banner",
        data(){
			return {
				banners : []
			}
		},
		methods : {
			getBanner() {
				axios.get("/static/mock/banner.json")
					.then(res=>{
						this.banners = res.data;
					})
			}
		},
		created() {
			this.getBanner();
		},
		updated() {
			console.log(this.banners);
			new Swiper(".swiper-container", {
				loop : true,
				autoplay : true
			});
		}
	};
</script>

<style scoped lang="scss">
	.banner {
		position: relative;
	    display: block;
	    overflow: hidden;
	    margin: 0;
	    padding: 0;
	    width: 320px;

	    img {
            display: inline-block;
	    	width: 100%;
	    }
	}
</style>