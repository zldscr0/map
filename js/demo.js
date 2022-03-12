//记录父级Name
var mapStack = [];
var parentName = null;
var point=-1;
//Echarts地图全局变量，主要是在返回上级地图的方法中会用到
var myChart = null;
var map = {
	//23个省
	"台湾": "taiwan",
	"河北": "hebei",
	"山西": "shanxi",
	"辽宁": "liaoning",
	"吉林": "jilin",
	"黑龙江": "heilongjiang",
	"江苏": "jiangsu",
	"浙江": "zhejiang",
	"安徽": "anhui",
	"福建": "fujian",
	"江西": "jiangxi",
	"山东": "shandong",
	"河南": "henan",
	"湖北": "hubei",
	"湖南": "hunan",
	"广东": "guangdong",
	"海南": "hainan",
	"四川": "sichuan",
	"贵州": "guizhou",
	"云南": "yunnan",
	"陕西": "shanxi1",
	"甘肃": "gansu",
	"青海": "qinghai",
	//5个自治区
	"新疆": "xinjiang",
	"广西": "guangxi",
	"内蒙古": "neimenggu",
	"宁夏": "ningxia",
	"西藏": "xizang",
	//4个直辖市
	"北京": "beijing",
	"天津": "tianjin",
	"上海": "shanghai",
	"重庆": "chongqing",
	//2个特别行政区
	"香港": "xianggang",
	"澳门": "aomen",
	"南京市":"nanJing"
};


function make_city(cityname, dom_id){
	achart = echarts.init(document.getElementById(dom_id));
	var option =  {
		"title": [
			{
				"textStyle": {
					"color": "#aaa", 
					"fontSize": 18,
					"fontFamily": "Microsoft YaHei"
				}, 
				"text": cityname, 
				"subtext": 'Data from pku',
				"top": "auto", 
				"subtextStyle": {
					"color": "#aaa", 
					"fontSize": 12,
					"fontFamily": "Microsoft YaHei"
				}, 
				"left": "auto"
			}
		], 
		"tooltip": {
			"trigger": 'item',
			"formatter": '{b}<br/>{c}'
		  },
		"legend": [
			{
				"selectedMode": "multiple",
				"top": "top",
				"orient": "horizontal",
				"data": [
					""
				],
				"left": "center",
				"show": true
			}
		],
		"toolbox": [{
			show: true,
			orient: 'vertical',
			left: 'right',
			top: 'center',
			feature: {
			  dataView: { readOnly: false },
			  restore: {},
			  saveAsImage: {}
			}
		  }],
		
		"visualMap":[ {
			min: 250,
			max: 460,
			text: ['High', 'Low'],
			realtime: false,
			calculable: true,
			inRange: {
				color: [
					'#313695',
					'#4575b4',
					'#74add1',
					'#abd9e9',
					'#e0f3f8',
					'#ffffbf',
					'#fee090',
					'#fdae61',
					'#f46d43',
					'#d73027',
					'#a50026'
				  ]
			}
		  }],
		"series": [
			{
				"label": {
					show: true,
					"fontFamily": "Microsoft YaHei"
				  },
				"mapType": cityname,
				
				"itemStyle": {
					/*
					normal: {//未选中状态
						borderWidth:2,//边框大小
						borderColor:'lightgreen',
						areaColor: 'orange',//背景颜色
						label: {
							show: true//显示名称
						}
					},*/
					emphasis: {// 也是选中样式
						/*
						borderWidth:2,
						borderColor:'#fff',*/
						areaColor: '#FFDF33',
						/*
						label: {
							show: true,
							textStyle: {
								color: '#fff'
							}
						}*/
					 }    
					},
				"data": [
					/*江苏省*/
					{name:"连云港市",value:301.77},
					{name:"徐州市",value:305.17},
					{name:"盐城市",value:305.41},
					{name:"泰州市",value:305.75},
					{name:"宿迁市",value:305.81},
					{name:"淮安市",value:310.92},
					{name:"扬州市",value:301.77},
					{name:"无锡市",value:305.17},
					{name:"镇江市",value:305.41},
					{name:"苏州市",value:305.75},
					{name:"南京市",value:305.81},
					{name:"常州市",value:310.92},
					{name:"南通市",value:301.77},
					/*各省*/
					{name:"宁夏",value:361.52},
{name:"西藏",value:361.67},
{name:"新疆",value:364.88},
{name:"甘肃",value:367.36},
{name:"内蒙古",value:367.4},
{name:"青海",value:379.58},
{name:"黑龙江",value:380.09},
{name:"贵州",value:380.81},
{name:"山西",value:383.04},
{name:"海南",value:383.46},
{name:"吉林",value:385.29},
{name:"辽宁",value:386.33},
{name:"云南",value:387.78},
{name:"广西",value:390.41},
{name:"河北",value:391.92},
{name:"四川",value:396.05},
{name:"重庆",value:397.12},
{name:"江西",value:398.52},
{name:"陕西",value:402.11},
{name:"湖南",value:402.3},
{name:"河南",value:408.32},
{name:"安徽",value:408.38},
{name:"天津",value:408.74},
{name:"山东",value:409},
{name:"广东",value:409.06},
{name:"福建",value:409.82},
{name:"湖北",value:411.73},
{name:"江苏",value:421.7},
{name:"浙江",value:429.98},
{name:"北京",value:436.02},
{name:"上海",value:450.08}
				],
				"name": "",
				"symbol": "circle",
				"type": "map",
				"roam": false
			}]
		
	};
	achart.setOption(option);	
	echarts.dispose(document.getElementById('hh'));//先去掉原来的地图
		var chart = echarts.init(document.getElementById('hh'));
		chart.setOption(option);
		
		parentName = cityname;
		chart.on("click", function(param) {
			var cityId = map[param.name]
			if (cityId) {
				point=point+1;
				mapStack[point]=parentName;
				make_city(param.name,'hh');
			}
		});
		 
}
function cancel()
{
	if(point!=-1){
		var tmp =mapStack[point];
		point=point-1;
		make_city(tmp,'hh');}
}
