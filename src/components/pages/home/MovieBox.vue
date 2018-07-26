<template>
	<div class="movie-box">
		<ul>
			<li
				is="movie-item"
				v-for="movie in movies"
				:key="movie.id"
				:movie="movie"
				:type="type"></li>
		</ul>

		<div class="more-button">更多{{type.title}}电影</div>
	</div>
</template>

<script>
	import MovieItem from "./MovieItem.vue";
	import axios from "axios";
	export default {
		name : "MovieBox",
		props : ["type"],
		components : {
			MovieItem
		},
		data() {
			return {
				movies : [],
				page : 1
		    };
		},
		methods : {
			getMovies() {
				axios.get("http://localhost:8080/mz/v4/api/film/" + this.type.url_type, {
					params : {
						page : this.page,
						count : this.type.count,
						__t: Date.now()
					}
				}).then(res=>{
					this.movies = res.data.data.films;
				}).catch((data)=>{
					 console.log(data);
				})
			}
		},
		created() {
			this.getMovies();
		}
	}
</script>

<style lang="scss" scoped>
	.movie-box {
		ul {
			padding-top: 18px;
		}

		.more-button {
			width: 160px; 
		    height: 30px;
		    border: 1px solid #aaa;
		    border-radius: 15px;
		    margin: 10px auto 30px;
		    text-align: center;
		    line-height: 30px;
		    font-size: 12px;
		    color: #616161;
		    cursor: pointer;
		}
	}
</style>