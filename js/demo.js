//记录父级Name
var table=['矿业',"生产"]
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
					"color": "purple", 
					"fontSize": 16,
					"fontFamily": "Microsoft YaHei"
				}, 
				"text": " "+cityname, 
				//"subtext": cityname,
				"top": "auto", 
				"subtextStyle": {
					"color": "balck", 
					"fontSize": 16,
					"fontFamily": "Microsoft YaHei"
				}, 
				"left": "auto"
			}
		], 
		"tooltip": {
			"trigger": 'item',
			"formatter":function(params){
				
				var res=params.name+"<br>";
				var myseries=option.series;
				
				/*
				for(var i=0;i<myseries.length;i++)
				{
					for(var k=0;k<myseries[i].data.length;k++)
					if(myseries[i].data[k].name==params.name)
					{
						res+=myseries[i].name+':'+myseries[i].data[k].value+"<br>";
					}
				}*/
				for(var k=0;k<myseries[0].data.length;k++){
					if(myseries[0].data[k].name==params.name)
					{
						if(point==1){
						var num = myseries[0].data[k].value/3.3;
						num = num.toFixed(2);
						}
						else if(point==0)
						{
						var num = myseries[0].data[k].value/1.3;
						num = num.toFixed(2);
						}
						else{
							num= myseries[0].data[k].value;
						}
						res+=myseries[0].name+':'+num+"<br>";
					
					}
				}
				for(var k=0;k<myseries[1].data.length;k++){
					if(myseries[1].data[k].name==params.name)
					{
						
						res+=myseries[1].name+':'+myseries[1].data[k].value+"<br>";
					}
				}
				
				return res;
				
				
				
			}
		  },
		"legend": [
			{
				"top": "top",
				"orient": "horizontal",
				/*
				"data": [
					{
						name: '金融指数',
						   }, {
						name: '行业',
						  }
				],*/
				"left": "center",
				"show": false,
				"textStyle": {
					color: '#fff'
				}
			}
		],
		"toolbox": [{
			show: true,
			orient: 'vertical',
			left: 'left',
			top: 'center',
			feature: {
			  dataView: { readOnly: false },
			  restore: {},
			  saveAsImage: {}
			}
		  }],
		
		"visualMap":[ {
			seriesIndex:0,
			min: 358,
			max: 451,
			text: ['High', 'Low'],
			realtime: false,
			calculable: true,
			inRange: {
				color: [
					/*
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
					'#a50026'*/
					'#abd9e9',
					'lightskyblue',
					'#74add1',
					'#4575b4',
					'#313695',
					'#031d8c',
				  ]
			}
		  }],
		  
		"series": [
			{
				zoom:1.2,
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
					/*1.3*/
					{name:"萍乡市",value:358.38},
					{name:"莱芜市",value:358.44},
					{name:"鹰潭市",value:363.48},
					{name:"池州市",value:373.17},
					{name:"淮北市",value:373.58},
					{name:"淮南市",value:378.60},
					{name:"南平市",value:379.04},
					{name:"枣庄市",value:379.38},
					{name:"德州市",value:379.67},
					{name:"九江市",value:380.02},
					{name:"聊城市",value:380.11},
					{name:"三明市",value:380.78},
					{name:"景德镇市",value:381.29},
					{name:"上饶市",value:381.52},
					{name:"赣州市",value:381.63},
					{name:"东营市",value:381.65},
					{name:"漳州市",value:382.19},
					{name:"宜春市",value:383.36},
					{name:"蚌埠市",value:385.19},
					{name:"吉安市",value:385.57},
					{name:"新余市",value:385.57},
					{name:"宿州市",value:386.00},
					{name:"龙岩市",value:386.45},
					{name:"六安市",value:386.80},
					{name:"黄山市",value:386.89},
					{name:"莆田市",value:387.83},
					{name:"抚州市",value:387.83},
					{name:"安庆市",value:387.86},
					{name:"亳州市",value:388.01},
					{name:"菏泽市",value:389.04},
					{name:"日照市",value:390.00},
					{name:"宣城市",value:390.57},
					{name:"丽水市",value:391.20},
					{name:"铜陵市",value:392.11},
					{name:"滨州市",value:392.24},
					{name:"连云港市",value:392.30},
					{name:"临沂市",value:393.26},
					{name:"淄博市",value:393.83},
					{name:"青岛市",value:396.68},
					{name:"徐州市",value:396.72},
					{name:"盐城市",value:397.03},
					{name:"舟山市",value:397.20},
					{name:"泰州市",value:397.48},
					{name:"宿迁市",value:397.55},
					{name:"泉州市",value:397.80},
					{name:"温州市",value:397.93},
					{name:"滁州市",value:398.22},
					{name:"泰安市",value:398.40},
					{name:"芜湖市",value:398.45},
					{name:"马鞍山市",value:399.09},
					{name:"阜阳市",value:402.08},
					{name:"台州市",value:402.19},
					{name:"宁德市",value:403.39},
					{name:"潍坊市",value:403.68},
					{name:"福州市",value:404.07},
					{name:"淮安市",value:404.20},
					{name:"扬州市",value:404.25},
					{name:"无锡市",value:405.16},
					{name:"镇江市",value:406.03},
					{name:"湖州市",value:406.34},
					{name:"烟台市",value:407.51},
					{name:"绍兴市",value:408.32},
					{name:"苏州市",value:409.10},
					{name:"济宁市",value:409.12},
					{name:"金华市",value:409.77},
					{name:"济南市",value:409.86},
					{name:"威海市",value:410.87},
					{name:"合肥市",value:411.00},
					{name:"衢州市",value:411.26},
					{name:"宁波市",value:412.45},
					{name:"南昌市",value:412.58},
					{name:"厦门市",value:414.27},
					{name:"嘉兴市",value:415.17},
					{name:"南京市",value:417.11},
					{name:"常州市",value:422.96},
					{name:"南通市",value:423.70},
					{name:"杭州市",value:433.07},
					{name:"上海市",value:434.10},
					


/*3.3*/

{name:"玄武区",value:433.95},
{name:"秦淮区",value:418.77},
{name:"建邺区",value:424.08},
{name:"鼓楼区(南京)",value:428.44},
{name:"浦口区",value:415.21},
{name:"栖霞区",value:415.93},
{name:"雨花台区",value:411.54},
{name:"江宁区",value:411.58},
{name:"六合区",value:404.81},
{name:"溧水区",value:397.09},
{name:"高淳区",value:394.05},
{name:"锡山区",value:395.51},
{name:"惠山区",value:406.66},
{name:"滨湖区",value:418.28},
{name:"梁溪区",value:407.15},
{name:"新吴区",value:395.37},
{name:"鼓楼区(徐州)",value:411.61},
{name:"云龙区",value:397.55},
{name:"贾汪区",value:389.90},
{name:"泉山区",value:408.08},
{name:"铜山区",value:381.38},
{name:"天宁区",value:408.51},
{name:"钟楼区",value:401.41},
{name:"新北区",value:408.08},
{name:"武进区",value:433.98},
{name:"虎丘区",value:413.75},
{name:"吴中区",value:400.62},
{name:"相城区",value:410.26},
{name:"姑苏区",value:419.17},
{name:"吴江区",value:394.91},
{name:"崇川区",value:424.97},
{name:"港闸区",value:403.23},
{name:"通州区",value:393.92},
{name:"连云区",value:388.41},
{name:"海州区",value:404.68},
{name:"赣榆区",value:358.22},
{name:"淮安区",value:386.53},
{name:"淮阴区",value:374.58},
{name:"清江浦区",value:419.69},
{name:"亭湖区",value:389.93},
{name:"盐都区",value:400.42},
{name:"广陵区",value:402.93},
{name:"邗江区",value:402.30},
{name:"江都区",value:389.07},
{name:"京口区",value:409.17},
{name:"润州区",value:402.90},
{name:"丹徒区",value:396.56},
{name:"海陵区",value:403.46},
{name:"高港区",value:402.73},
{name:"姜堰区",value:405.54},
{name:"宿城区",value:385.41},
{name:"宿豫区",value:372.37},
{name:"丰县",value:394.25},
{name:"沛县",value:380.26},
{name:"睢宁县",value:360.26},
{name:"海安县",value:405.74},
{name:"如东县",value:385.61},
{name:"东海县",value:363.00},
{name:"灌云县",value:371.68},
{name:"灌南县",value:403.26},
{name:"涟水县",value:384.02},
{name:"洪泽区",value:400.29},
{name:"盱眙县",value:391.81},
{name:"金湖县",value:392.27},
{name:"响水县",value:392.14},
{name:"滨海县",value:372.67},
{name:"阜宁县",value:389.80},
{name:"射阳县",value:386.43},
{name:"建湖县",value:381.51},
{name:"宝应县",value:395.70},
{name:"沭阳县",value:377.69},
{name:"泗阳县",value:396.56},
{name:"泗洪县",value:395.34},
{name:"江阴市",value:394.42},
{name:"宜兴市",value:400.22},
{name:"新沂市",value:376.73},
{name:"邳州市",value:385.44},
{name:"溧阳市",value:403.69},
{name:"金坛区",value:401.71},
{name:"常熟市",value:386.40},
{name:"张家港市",value:394.88},
{name:"昆山市",value:405.67},
{name:"太仓市",value:384.12},
{name:"启东市",value:386.46},
{name:"如皋市",value:406.13},
{name:"海门市",value:364.55},
{name:"东台市",value:398.41},
{name:"大丰区",value:396.30},
{name:"仪征市",value:388.48},
{name:"高邮市",value:399.73},
{name:"丹阳市",value:399.53},
{name:"扬中市",value:389.43},
{name:"句容市",value:401.58},
{name:"兴化市",value:370.26},
{name:"靖江市",value:396.56},
{name:"泰兴市",value:388.05},


					



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
				"name": "金融指数",
				"symbol": "circle",
				"type": "map",
				"roam": false
			},

 /*行业*/
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
		/*泰州市 */
		{name:"海陵区",value:'果蔬种植、特水养殖、畜牧繁育、农产品加工'},
		/*无锡市 */
		{name:"惠山区",value:'水蜜桃、蔬菜种植'},
		/*泰州市 */
		{name:"泰兴市",value:'以生猪为基础主导产业，以银杏为特色主导产业，还涉及果蔬种植、农产品加工及农业旅游产业'},
		/*准安市 */
		{name:"盱眙县",value:'虾稻产业、特色生态农业、绿色稻米、龙虾加工等产业'},
		/*东台市 */
		{name:"东台市",value:'以西瓜、甜叶菊为主导产业'},
		/*南京市 */
		{name:"高淳区",value:'以螃蟹为主的水产养殖业'},
		/*宿迁市 */
		{name:"泗阳县",value:'食品加工、食用菌、设施园艺、休闲观光等主导产业'},
		/*无锡市 */
		{name:"锡山区",value:'优质稻米、精细蔬菜两大基础产业；翠竹茶叶、特种水产、景观苗木、时令果品四大特色产业'},
		/*苏州市 */
		{name:"吴江区",value:'以优质粮油（水稻、油菜）为主导产业'},
		/*扬州市 */
		{name:"宝应县",value:'荷藕产业'},
		/*徐州市 */
		{name:"邳州市",value:'大蒜产业'},
		/*宿迁市 */
		{name:"沭阳县",value:'花木产业'}

		
		
	],
	"name": "特色产业",
	"symbol": "circle",
	"type": "map",
	"roam": false
}] };

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
