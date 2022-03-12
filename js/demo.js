//记录父级Name
var mapStack = [];
var parentName = null;
var point=-1;
//Echarts地图全局变量，主要是在返回上级地图的方法中会用到
var myChart = null;
var map = {
	//23
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
	
	//2个特别行政区
	"香港": "xianggang",
	"澳门": "aomen",
	//
	"南京市":"nanJing",
	"连云港市":"lianyungang",
	"徐州市":"xuzhou",
	"盐城市":"yancheng",
	"泰州市":"taizhou",
	"宿迁市":"suqian",
	"淮安市":"huaian",
	"扬州市":"yangzhou",
	"无锡市":"wuxi",
	"镇江市":"zhengjiang",
	"苏州市":"suzhou",
	"常州市":"changzhou",
	"南通市":"nantong"
				
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
				/*"subtext": 'Data from pku',*/
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
			min: 100,
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
					{name:"玄武区",value:131.41},
{name:"秦淮区",value:126.9},
{name:"建邺区",value:128.51},
{name:"鼓楼区(南京)",value:129.83},
{name:"浦口区",value:125.82},
{name:"栖霞区",value:126.04},
{name:"雨花台区",value:124.71},
{name:"江宁区",value:124.72},
{name:"六合区",value:122.67},
{name:"溧水区",value:120.33},
{name:"高淳区",value:119.41},
{name:"锡山区",value:119.85},
{name:"惠山区",value:123.23},
{name:"滨湖区",value:126.75},
{name:"梁溪区",value:123.38},
{name:"新吴区",value:119.81},
{name:"鼓楼区(徐州)",value:124.73},
{name:"云龙区",value:120.47},
{name:"贾汪区",value:118.15},
{name:"泉山区",value:123.66},
{name:"铜山区",value:115.57},
{name:"天宁区",value:123.79},
{name:"钟楼区",value:121.64},
{name:"新北区",value:123.66},
{name:"武进区",value:131.51},
{name:"虎丘区",value:125.38},
{name:"吴中区",value:121.4},
{name:"相城区",value:124.32},
{name:"姑苏区",value:127.02},
{name:"吴江区",value:119.67},
{name:"崇川区",value:128.78},
{name:"港闸区",value:122.19},
{name:"通州区",value:119.37},
{name:"连云区",value:117.7},
{name:"海州区",value:122.63},
{name:"赣榆区",value:108.55},
{name:"淮安区",value:117.13},
{name:"淮阴区",value:113.51},
{name:"清江浦区",value:127.18},
{name:"亭湖区",value:118.16},
{name:"盐都区",value:121.34},
{name:"广陵区",value:122.1},
{name:"邗江区",value:121.91},
{name:"江都区",value:117.9},
{name:"京口区",value:123.99},
{name:"润州区",value:122.09},
{name:"丹徒区",value:120.17},
{name:"海陵区",value:122.26},
{name:"高港区",value:122.04},
{name:"姜堰区",value:122.89},
{name:"宿城区",value:116.79},
{name:"宿豫区",value:112.84},
{name:"丰县",value:119.47},
{name:"沛县",value:115.23},
{name:"睢宁县",value:109.17},
{name:"海安县",value:122.95},
{name:"如东县",value:116.85},
{name:"东海县",value:110},
{name:"灌云县",value:112.63},
{name:"灌南县",value:122.2},
{name:"涟水县",value:116.37},
{name:"洪泽区",value:121.3},
{name:"盱眙县",value:118.73},
{name:"金湖县",value:118.87},
{name:"响水县",value:118.83},
{name:"滨海县",value:112.93},
{name:"阜宁县",value:118.12},
{name:"射阳县",value:117.1},
{name:"建湖县",value:115.61},
{name:"宝应县",value:119.91},
{name:"沭阳县",value:114.45},
{name:"泗阳县",value:120.17},
{name:"泗洪县",value:119.8},
{name:"江阴市",value:119.52},
{name:"宜兴市",value:121.28},
{name:"新沂市",value:114.16},
{name:"邳州市",value:116.8},
{name:"溧阳市",value:122.33},
{name:"金坛区",value:121.73},
{name:"常熟市",value:117.09},
{name:"张家港市",value:119.66},
{name:"昆山市",value:122.93},
{name:"太仓市",value:116.4},
{name:"启东市",value:117.11},
{name:"如皋市",value:123.07},
{name:"海门市",value:110.47},
{name:"东台市",value:120.73},
{name:"大丰区",value:120.09},
{name:"仪征市",value:117.72},
{name:"高邮市",value:121.13},
{name:"丹阳市",value:121.07},
{name:"扬中市",value:118.01},
{name:"句容市",value:121.69},
{name:"兴化市",value:112.2},
{name:"靖江市",value:120.17},
{name:"泰兴市",value:117.59},



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
