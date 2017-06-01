<template>
 <div id="production">
  <el-row class="project">
    <el-col :xs="{span:22,offset:1}" :sm="{span:14, offset:2}" class="content">
			
    	<div v-if="list.length == 0">加载中....</div>
			<el-card class="box-card" v-for="card in showList" :key="card.time">
				<div slot="header" class="clearfix">
					<span style="line-height: 25px;">{{card.title}}</span><span style="font-size:10px;margin-left:20px;">时间: {{card.time}}</span>
					<el-button style="float: right;" type="primary">打开全文</el-button>
				</div>
				<p>{{card.describe}}</p>
			</el-card>
			
			<el-row>
				<div class="pages">
					<el-pagination
						layout="prev, pager, next"
						:total="cloneList.length"
						:page-size="pageSize"
						@current-change="pageChange"
						>
					</el-pagination>
				</div>
    	</el-row>
    </el-col>
    
    <el-col :xs="0" :sm="{span:5, offset: 1}" class="filter">
    	<div>
    		<h2>标题</h2>
				<div style="width:80%;">
					<el-input
						placeholder="标题搜索"
						icon="search">
					</el-input>
				</div>
			</div>
     
     	<div>
				<h2>标签</h2>
				<ul>
					<li><el-tag type="gray" color="#ffba00" @click.native="tagFiltr('all')"># 全部</el-tag></li>
					<li><el-tag @click.native="tagFiltr('Javascript')"># Javascript</el-tag></li>
					<li><el-tag type="primary"  @click.native="tagFiltr('Css3')"># Css3</el-tag></li>
					<li><el-tag type="danger"  @click.native="tagFiltr('Html5')"># Html5</el-tag></li>
					<li><el-tag type="success"  @click.native="tagFiltr('NodeJs')"># NodeJs</el-tag></li>
					<li><el-tag type="success" color="black" @click.native="tagFiltr('Vue')"># Vue</el-tag></li>
				</ul>
			</div>
			
			<div>
				<h2>排序</h2>
				<ul>
					<li>时间</li>
				</ul>
			</div>
			
			<div>
				<h2>时间</h2>
				<ul>
					<li>2017-5</li>
					<li>2017-5</li>
					<li>2017-5</li>
					<li>2017-5</li>
				</ul>
			</div>
    </el-col>
  </el-row>

  </div>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				pageSize: 4,
				currPage: 1,
				tag: "all"
			}
		},
		created() {
			this.init()
		},
		methods: {
			init() {
				const self = this;
				self.$Api.getProjectList().then(res => {
					self.list = res.data;
				})
			},
			pageChange(current){
				this.currPage = current;
			},
			tagFiltr(tag){
				this.tag = tag;
			}
		},
		computed:{
			cloneList(){
				return this.list.filter( li => {
					return  this.tag === "all" || li.tags === this.tag
				})
			},
			showList(){
				const vm = this;
				const prve = (vm.currPage - 1) * vm.pageSize;
				const next = prve + vm.pageSize;
				return vm.cloneList.slice(prve, next);
			},
		},
		components: {}
	}

</script>

<style lang="less" scoped>
	#production {
		margin-top: 20px;
		height: calc(~"100vh - 20px");
		position: relative;
		font-size: .18rem;
		>.project {
			min-height: 90%;
			min-height: calc(~"100% - 80px");
		}
	}
	
	.content {
		>div {
			margin-bottom: 20px;
		}
		h2 {
			font-size: .26rem;
			margin-bottom: 5px;
		}
	}
	
	.filter {
		overflow: hidden;
		text-align: left;
		>div:nth-child(1) {
			margin-top: 0;
		}
		>div {
			text-align: left;
			margin: 25px 0 5px 0;
			h2 {
				margin-bottom: 3px;
				color: firebrick;
			}
			li {
				cursor: pointer;
				margin: 8px 5px;
			}
		}
	}
	
	.pages {
		text-align: center;
		padding-bottom: 20px;
	}

</style>
