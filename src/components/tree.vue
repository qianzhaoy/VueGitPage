<template>
	 <div class="tree">
			<ul>
				<li><i class="el-icon-document"></i> .babelrc</li>
				<li><i class="el-icon-document"></i> .editorconfig</li>
				<li><i class="el-icon-document"></i> .gitignore</li>
				<li><i class="el-icon-document"></i> .postcssrc.js</li>
				<li><i class="el-icon-arrow-right"></i> build</li>
				<li><i class="el-icon-arrow-right"></i> config</li>
				<li><i class="el-icon-document"></i> favicon.ico</li>
				<li><i class="el-icon-document"></i> index.html</li>
				<li><i class="el-icon-document"></i> package.json</li>
				<li><i class="el-icon-document"></i> README.md</li>
				<li><i class="el-icon-arrow-down"></i> src
					<ul> 
						<li><i class="el-icon-arrow-right "></i> API</li>
						<li><i class="el-icon-document"></i> App.vue</li>
						<li><i class="el-icon-arrow-down"></i> assets
							<ul>
								<li><i class="el-icon-arrow-right"></i> css</li>
								<li><i class="el-icon-arrow-right"></i> images</li>
							</ul>
						</li>
						<li><i class="el-icon-arrow-down"></i> components
							<ul>
								<li><i class="el-icon-document"></i> aboutLeft.vue</li>
								<li><i class="el-icon-document"></i> aboutRight.vue</li>
								<li><i class="el-icon-document"></i> arcCanvas.vue</li>
								<li><i class="el-icon-document"></i> banner.vue</li>
								<li><i class="el-icon-document"></i> navgate.vue</li>
								<li><i class="el-icon-document"></i> skillExp.vue</li>
								<li><i class="el-icon-document"></i> tree.vue</li>
							</ul>
						</li>
						<li><i class="el-icon-document"></i> main.js</li>
						<li><i class="el-icon-arrow-down"></i> router
							<ul>
								<li><i class="el-icon-document"></i> index.js</li>
							</ul>
						</li>
						<li><i class="el-icon-arrow-down"></i> view
							<ul>
								<li><i class="el-icon-document"></i> aboutMe.vue</li>
								<li><i class="el-icon-document"></i> connection.vue</li>
								<li><i class="el-icon-document"></i> home.vue</li>
								<li><i class="el-icon-document"></i> production.vue</li>
								<li><i class="el-icon-document"></i> skill.vue</li>
							</ul>
						</li>
						<li><i class="el-icon-arrow-down"></i> vuex
							<ul>
								<li><i class="el-icon-document"></i> store.js</li>
							</ul>
						</li>
					</ul>
				</li>
				<li><i class="el-icon-arrow-down"></i> static
					<ul>
						<li><i class="el-icon-document"></i> production.json</li>
					</ul>
				</li>
			</ul>
		</div>
</template>

<script>
	export default {}

</script>

<style lang="less" scoped>
	.tree ul {
		font-size: .18rem;
		border-left: 1px dashed #fff;
		padding-left: 1em;
	}
	
	.tree>ul {
		border: 0
	}
	
	i {
		font-size: .14rem;
	}
	

</style>
