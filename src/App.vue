<template>
<div id="app">
	<v-app>
	        <v-container>       
	      <v-layout column>
	      <v-flex>
	      <v-sheet>
	        우리는 인생을 사는 이유를 깨우쳐야한다.           
	      </v-sheet>           
	      <v-btn :label="btnLabel"> </v-btn>          
	      </v-flex>         
	      <v-flex>              
			<v-btn :label="btnLabel"> 
			</v-btn>          </v-flex>         
			<v-flex>              
			<v-btn :label="btnLabel">
			</v-btn>          
			</v-flex>       
			</v-layout>     
		</v-container>     
	</v-app> 
 </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
