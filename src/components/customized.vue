<template lang="html">
	<div>定制</div>
</template>
<script type="text/javascript">
	export default {
		mounted: function() {
	       this.$nextTick(function() {
	          this.$store.state.showHF = true
	       })
	    },
	}
</script>
<style type="text/css" scoped>
	
</style>