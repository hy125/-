<template>
    <div class="nav-list"> 
		<!--遮罩-->
		<transition
		enter-active-class="animated fadeIn"
		leave-active-class="animated fadeOut">
			<div class="mask" @click="$emit('close')"  v-if="isNavShow"></div>
		</transition>
		<!--导航-->
		<transition
		enter-active-class="animated slideInLeft"
		leave-active-class="animated slideOutLeft">
		 <nav class="nav-group" v-if="isNavShow">
            <ul>
                <li
                    v-for="nav in navs"
                    :key="nav.id">
                    {{nav.title}}
                    <i class="fa fa-angle-right"></i>
                </li>
            </ul>
        </nav>
		</transition>
    </div>
</template>


<script>
    export default{
        name:"NavList",
		props:["isNavShow"],
        data(){
            return{
                navs:[
                  {id : 1, title: "首页"},
                  {id : 2 ,title: "影片"},
                  {id : 3 ,title: "影院"},
                  {id : 4 ,title: "商城"},
                  {id : 5 ,title: "我的"},
                  {id : 6 ,title: "卖座卡"}

                ]
            }
        }
    }
</script>


<style scoped lang="scss">
   .nav-list {
		position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    color: #9a9a9a;
	    z-index: 499;

	    .mask {
	    	background: rgba(0,0,0, .4);
		    position: absolute;
		    top: 50px;
		    right: 0;
		    left: 0;
		    transition: all ease 0.4s;
		    -webkit-transition: all ease 0.4s;
		    height: 100vh;
		}

	    .nav-group {
	    	border-top: 1px solid #222;
		    box-shadow: 0 1px 1px #363636 inset;
		    background: #282828;
		    position: absolute;
		    display: block;
		    top: 50px;
		    right: 110px;
		    left: 0;
		    transition: all ease 0.4s;
		    -webkit-transition: all ease 0.4s;
		    height: 100vh;

		    li {
		    	line-height: 50px;
		    	display: flex;
		    	justify-content: space-between;
		    	align-items: center;
		    	padding: 0 16px;
				border-bottom: 1px dotted #333;
		    }
	    }
	    
	}
</style>