<template>
<div>
    <mu-drawer :open="open" :docked="docked" @close="toggle()" class="mu-drawer-c">
      <div class="demo-menu-container">
		  <mu-paper class="demo-menu">
		    <mu-menu desktop>
		      <mu-menu-item title="Bold" afterText="⌘B"/>
		      <mu-menu-item title="Italic" afterText="⌘I"/>
		      <mu-menu-item title="Underline" afterText="⌘U"/>
		      <mu-menu-item title="Strikethrough" afterText="Alt+Shift+5"/>
		      <mu-menu-item title="Superscript" afterText="⌘."/>
		      <mu-menu-item title="Subscript" afterText="⌘,"/>
		      <mu-divider />
		      <mu-menu-item title="Paragraph styles" rightIcon="keyboard_arrow_right"/>
		      <mu-menu-item title="Align" rightIcon="keyboard_arrow_right"/>
		      <mu-menu-item title="Line spacing" rightIcon="keyboard_arrow_right"/>
		      <mu-menu-item title="Paragraph styles" rightIcon="keyboard_arrow_right"/>
		      <mu-menu-item title="Numbered list" rightIcon="keyboard_arrow_right"/>
		      <mu-menu-item title="List options" rightIcon="keyboard_arrow_right"/>
		      <mu-divider />
		      <mu-menu-item title="Clear formatting" afterText="⌘/"/>
		    </mu-menu>
		  </mu-paper>
		  <mu-paper class="demo-menu">
		    <mu-menu desktop :width="256">
		      <mu-menu-item title="Open" afterText="Cmd + O" />
		      <mu-menu-item title="Paste in place" afterText="Shift + V" />
		      <mu-menu-item title="Research" afterText="Opt + Shift + Cmd + I" />
		    </mu-menu>
		  </mu-paper>
		</div>
    </mu-drawer>
</div>
</template>

<script>

export default {
  data: function() {
    return {

    }
  },
  computed: {
    open: function() {
      return this.$store.state.open
    },
    docked: function() {
      return this.$store.state.docked
    }
  },
  mounted: function() {
  	this.$nextTick(function() {
  		// this.getState();
  	})
  },
  methods: {
    toggle: function(flag) {    	
		this.$store.dispatch('changeFlag')
    },
  },
 
}
</script>
<style type="text/css">
	/*.mu-drawer-c.mu-paper.mu-drawer {
		color: #fff;
		background-color: #000;
	}
	.mu-item-title-row .mu-item-title {
		color: #fff;
	}*/
	.demo-menu {
	  display: block;
	}
	.mu-menu {
	  margin: 0 auto;
	}
</style>