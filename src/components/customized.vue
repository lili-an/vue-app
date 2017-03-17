<template lang="html">
	<div>
		<div class="customized">
			<div class="item">定制</div>
			<div class="item">定制</div>
			<div class="item">定制</div>
		</div>
		<div class="customized">
			<div class="item">定制</div>
			<div class="item">定制</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		mounted() {
	       this.$nextTick(function() {
	          this.$store.state.showHF = true
	          this.$store.state.bottomNav= 'customized'
	       })
	    },
	}
</script>
<style type="text/css" scoped>
	.customized {
		display: flex;
		color: #fff;
		justify-content: center;
		align-items: center;
	}
	.item {
		flex-basis: 100%;
		padding: 20px;
		background-color: #000;
		margin: 2px;
	}
</style>