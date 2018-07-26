<template>
	<div class="home page">
		<!-- 轮播 -->
		<banner></banner>
	
		<movie-box
			v-for="type in types"
			:key="type.id"
			:type="type"></movie-box>
	</div>
</template>

<script>
	import Banner from "./Banner.vue";
	import MovieBox from "./MovieBox.vue";
	export default {
		name : "Home",
		data() {
			return {
				types : [
					{id: 1, url_type: "now-playing", count: 5, title:"热映"},
					{id: 2, url_type: "coming-soon", count: 3, title:"即将上映"}
				]
			}
		},
		components : {
			Banner,
			MovieBox
		}
	};
</script>

<style scoped lang="scss">
	.dividing-line {
		position: relative;
	    margin-top: 30px;
	    margin-bottom: 30px;
	    border-bottom: 1px solid #a8a8a8;
	    .up-coming {
	    	width: 65px;
		    height: 20px;
		    margin: 0 auto;
		    margin-bottom: -10px;
		    border-radius: 5px;
		    font-size: 10px;
		    line-height: 20px;
		    text-align: center;
		    color: #eee;
		    background-color: #a7a7a7;
	    }
	}
</style>