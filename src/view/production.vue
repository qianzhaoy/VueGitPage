<template>
 <div id="production">
  <el-row class="project">
    <el-col :xs="{span:22,offset:1}" :sm="{span:14, offset:2}" class="content">
			
      <div v-if="list.length == 0">加载中....</div>
      
      <transition-group name="list" tag="div">
				<el-row class="box-card"  v-for="card in showList" :key="card">
					<el-card>
							<el-row slot="header" type="flex" class="clearfix">
									<el-col class="projectTitle">{{card.title}}</el-col>
									<el-col class="projectTime">{{card.time}}</el-col>
									<el-col class="projectBtn"><el-button type="primary" @click="showProject(card.link)">打开链接</el-button></el-col>
							</el-row>
							<p>{{card.describe}}</p>
					</el-card>
				</el-row>
        
        <el-row class="pages" key="pages">
          <div>
              <el-pagination
                  layout="prev, pager, next"
                  :total="cloneList.length"
                  :page-size="pageSize"
                  @current-change="pageChange"
                  >
              </el-pagination>
          </div>
        </el-row>
        
      </transition-group>
      

    </el-col>
    
    <el-col :xs="0" :sm="{span:5, offset: 1}" class="filter">
        <div>
          <h2>标题</h2>
          <div style="width:80%;">
              <el-input
                  placeholder="标题搜索"
                  icon="close"
                  v-model.trim="searchTitle"
                  @click="reset"
                  @change="search">
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
					<li @click="add">时间</li>
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
				searchTitle: "",
				tag: "all",
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
			pageChange(current) {
				this.currPage = current;
			},
			tagFiltr(tag) {
				this.tag = tag;
			},
			search() {
				console.log(this.searchTitle)
			},
			reset() {
				this.searchTitle = ""
			},
			add() {
				this.list.splice(2, 1)
			},
			showProject(link){
				window.open(link)
			}
		},
		computed: {
			cloneList() {
				const self = this;
				return self.list.filter(li => {
					//标签检索
					const tagFilter = self.tag === "all" || li.tags === self.tag,

						//标题检索
						reg = new RegExp(self.searchTitle),
						titleFilter = reg.test(li.title);

					return tagFilter && titleFilter
				})
			},
			showList() {
				const vm = this;
				const prve = (vm.currPage - 1) * vm.pageSize;
				const next = prve + vm.pageSize;

				return vm.cloneList.slice(prve, next);
			},
		},
	}

</script>

<style lang="less" scoped>
	.list-enter-active,
	.list-leave-active {
		transition: all 1s;
	}
	
	.list-leave-active,
	.list-enter {
		opacity: 0;
		transform: translateX(-300px);
	}
	
	.list-leave-active {
		position: absolute;
	}
	
	#production {
		margin-top: 20px;
		height: calc(~"100vh - 20px");
		font-size: .18rem;
		>.project {
			min-height: 90%;
			min-height: calc(~"100% - 80px");
		}
	}
	
	.content {
		div.box-card {
			transition: all 1s;
			margin-bottom: 20px;
			line-height: 36px;
			
			.projectTitle {
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap
			}
			.projectTime {
				font-size: 0.14rem;
			}
			.projectBtn{
				text-align: right
			}
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
		transition: all 1s;
		padding-bottom: 20px;
	}

</style>
