<template>
	<li class="item">
		<div class="item-img">
			<img :src="movie.cover.origin">
		</div>

		<div class="desc" :class="type.url_type">			
			<div class="left">
				<div class="name">{{movie.name}}</div>
				<div class="count" v-if="type.url_type=='now-playing'">{{movie.cinemaCount}}家影院上映 {{movie.watchCount}}人购票</div>
			</div>
			<div class="right">
				<div class="score" v-if="type.url_type=='now-playing'">{{movie.grade}}</div>
				<div class="date" v-else>{{movie.premiereAt | time}} 上映</div>
			</div>
		</div>
	</li>
</template>

<script>
	export default {
		name : "MovieItem",
		props : ["type", "movie"],
		filters : {
			time(value) {
				let date = new Date(value);
				return date.getMonth() + 1 + "月" + date.getDate() + "日";
			}
		}
	}

</script>

<style lang="scss" scoped>
	.item {
		margin: 0 17px 17px 17px;
	    background-color: #f9f9f9;
	    -webkit-box-shadow: 0.5px 0.5px 1px #a8a8a8;
	    -moz-box-shadow: 0.5px 0.5px 1px #a8a8a8;
	    box-shadow: 0.5px 0.5px 1px #a8a8a8;
	    cursor: pointer;

	    .item-img {
	    	overflow: hidden;
    		position: relative;
    		background-image: url("/static/images/loading.png");
		    background-size: 100% 100%;
		    background-position: center center;
    		width: 286px;
    		height: 160px;
    		img {
    			width: 100%;
    		}
	    }

	    .desc {
	    	height: 50px;
    		margin-left: -15px;
    		display: flex;
    		justify-content: space-between;
    		align-content: center;
	    	.left {
	    		float: left;
	    		height: 50px;
			    padding-right: 0;
			    padding-top: 13px;
			    padding-left: 28px;
			    .name {
			    	font-size: 12px;
				    line-height: 15px;
				    -webkit-user-select: text;
				    user-select: text;
			    }
			    .count {
			    	font-size: 8px;
				    color: #9a9a9a;
				    line-height: 15px;
			    }
	    	}
	    	.right {
	    		float: left;
	    		.score {
	    			color: #f78360;
				    display: inline-block;
				    line-height: 50px;
				    float: right;
				    margin-right: 15px;
				    font-size: 18px;
	    		}
	    	}
	    }

	    .coming-soon {
	    	height: 35px;
	    	.left {
				float: left;
	    		height: 35px;
			    padding-top: 10px;
	    	}
	    	.right {
				float: left;
				.date {
					font-size: 10px;
				    color: RGB(245, 162, 125);
				    line-height: 15px;
				    height: 35px;
				    padding-right: 0;
				    padding-top: 10px;
				    padding-left: 28px;
				    margin-right: 15px;
				}
	    	}
	    }
	}
</style>