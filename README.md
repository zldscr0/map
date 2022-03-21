# map
结合Echarts写的一个数据可视化网页（地图+图表），实现了地图的三级下钻

数据可视化部分
1. 数据来源及处理
数据可视化部分所引用的数据为“北京大学数字普惠金融指数”。引自郭峰、王靖一、王芳、孔涛、张勋、程志云，《测度中国数字普惠金融发展: 指数编制与空间特征》，《经济学季刊》，2020年第19卷第4期，第1401-1418页。
这套指数包括了中国内地21个省（直辖市、自治区，简称“省”）、227个地级以上城市（地区、自治州、盟等，简称“城市”），以及近2800个县域（县级市、旗、市辖区等，简称“县域”）（港澳台地区数据暂未包括）的数字普惠金融指数，以及数字金融覆盖广度、数字金融使用深度以及普惠金融数字化程度等；
本部分参考的主要数据是2020年度各省、城市以及县域的数字普惠金融指数。主要使用MySQL数据库对数据进行筛选，筛选后的数据再通过Python编写相应代码对其进行格式化处理，从而便于直接将格式化后数据插入到图形化界面对应的数据模块中。
2. 代码实现及效果展示
本部分的代码使用了Html、css、JavaScipt结合数据可视化库Echarts实现。

2.1柱形图模块及饼图模块
 
 

柱形图和饼图中的数据配置及其引用与2.2所展示的代码几乎一致，不同点在于柱形图中有了x轴和y轴这样更直观的坐标来规定数据集，饼图更是只需两个一一对应的数据集就可根据占比制作，柱形图模块更加直观地展示出普惠金融指数最高的十个省份（或直辖市），饼图模块展示出了江苏省各市的普惠金融指数大小。

2.1.1 柱形图及饼图模块布局
1.	.panel {  
2.	    display: flex;  
3.	    min-width: 1080px;  
4.	    max-width: 1080px;  
5.	    margin: 0 auto;  
6.	    height:750px;  
7.	    padding: 0.125rem 0.125rem 0;  
8.	    background-color: white;  
9.	    }  


2.2列表模块
列表模块主要展示了江苏省特色产业的一些情况，这些数据在地图中也是可见的，表格的整体布局为了和前面的模块协调，仍然采用panel作为模块布局的 样式参考，在panel的基础上对高度进行了一定的调整，制表时主要对表项的背景等做了一定的修改。

1.	.table{  
2.	        margin:20px 0;  
3.	      }  
4.	  
5.	      .table tr td th{  
6.	        border-radius: 10px  
7.	      }  
8.	      .table-bordered{  
9.	        border:0;  
10.	      }  
11.	      .table td{  
12.	        background: #f2f2f2;  
13.	      }  
14.	      .table tr td:nth-child(1){  
15.	        color: #fff!important;  
16.	        border-radius: 5px;  
17.	        font-size:large;  
18.	        font-weight: 600;  
19.	        background: #4e9de7;  
20.	      }  
21.	     .table tr td:nth-child(2){  
22.	        color: #080101;  
23.	        font-size:large;  
24.	        font-weight: 600;  
25.	        background:#f5f6f7;  
26.	      }  
27.	      .table tr td:nth-child(2){  
28.	        color: #741919;  
29.	        font-size:medium;  
30.	        font-weight: 500;  
31.	        background:#f5f6f7;  
32.	      }  
33.	      }  

2.3地图模块
 
地图模块使用颜色的深浅显示出了不同地区的金融指数的高低情况，选中一个地图区块时会显示出对应地区的金融指数，若当地有特色产业也会显示出来。地图实现了三级下钻及返回，

2.2.1地图模块布局

1.	.citymap{  
2.	    display: flex;  
3.	    min-width: 1080px;  
4.	    max-width: 1080px;  
5.	    margin: 0 auto;  
6.	    height:750px;  
7.	    background-color: rgb(240, 228, 228);  
8.	    }  

2.2.2地图下钻
使用栈结构来保存已经进入过的区域，进入一个区域时将当前所处位置入栈。
1.	//.js
2.	parentName = cityname;  //记录当前位置
3.	chart.on("click", function(param) {//根据点击事件获取点击位置对应地区的名字  
4.	var cityId = map[param.name]//map用来存储有下一级的地区  
5.	if (cityId) {//如果有下一级就进入，无下一级的话不会触发下钻事件  
6.	            point=point+1;  
7.	           mapStack[point]=parentName;//入栈  
8.	           make_city(param.name,id);  
9.	            }  
10.	        });  

2.2.3 地图返回
返回事件用按钮触发函数，函数实现弹出栈顶元素并返回。

1.	//.js
2.	function cancel()  
3.	{  
4.	    if(point!=-1){  
5.	        var tmp =mapStack[point];  
6.	        point=point-1;  
7.	        make_city(tmp,id);}  
8.	}  
2.2.4 地图数据配置及引用
地图数据配置被封装在一个函数make_city(cityname,id)中，id对应的是一个地图模块的布局（装地图的盒子），地图需在该布局上完成初始化，然后配置完数据后echart插件会自动根据cityname找到其映射的地图文件信息，若搜索到了对应的地图文件信息就能成功加载出一个地图。
每一个地图数据内包含的信息主要有地图的轮廓、地图内部地区的名称及划分、地图内部地区所处的坐标等内容，这些地图数据可根据已有地图用工具生成js文件，添加相应地区对应的数据后会自动与js文件中各区域的名称对应，从而映射出整个区域。

初始界面的地图是中国地图，在html文件里放置了一个make_city(‘中国’,id);的js脚本内容，因此网页刚开始就能加载出中国地图，地图加载完成后这个函数并没有完成工作，它仍在等待一个点击操作实现地图的下钻。
对地图的数据配置操作就是对echarts类的一个图进行option配置，option配置中主要通过viusalMap配置显示各区域数据高低对应的颜色，通过series项改变地图放大倍数、存放地图数据、改变地图及图中文字显示等功能，通过toolbox加入保存图片、查看数据的功能，通过type项决定图表的类型等。(option代码细节过多，此处不做展示)
Make_city的基本逻辑：
1.	function make_city(cityname, dom_id){  
2.	    achart = echarts.init(document.getElementById(dom_id));  
3.	    var option = {……  
4.	}  
5.	    achart.setOption(option);  
6.	    ……  
7.	}  
插入到准备好的地图布局中：
1.	</div>  
2.	<div id='map' class="citymap">   
3.	  <script>  
4.	    make_city('中国', 'map');  
5.	  </script>  
6.	</div>  

2.2.5 点击事件
选取一个地区时返回的内容用一个function格式化返回，为了使得某些较小的数据也能有一定的颜色区分度，在对数据进行格式化操作的过程中对市区县的数据进行了一定的扩大（同一级数据的扩大倍数相同），然后在tooltip里显示其原数据，由栈顶指针可识别出当前所在级，将扩大的倍数缩回原来的大小即可（此过程中没有数据修改的情况，由于扩大后并未进行过数据的位数处理所以能够整除扩大倍数）。
1.	"tooltip": {  
2.	            "trigger": 'item',  
3.	            "formatter": function (params) {  
4.	  
5.	            var res = params.name + "<br>";  
6.	            var myseries = option.series;  
7.	            for (var k = 0; k < myseries[0].data.length; k++) {  
8.	                if (myseries[0].data[k].name == params.name) {  
9.	                    if (point == 1) {  
10.	                        var num = myseries[0].data[k].value / 2.2;  
11.	                        num = num.toFixed(2);  
12.	                    }  
13.	                    else if (point == 0) {  
14.	                        var num = myseries[0].data[k].value / 1.2;  
15.	                        num = num.toFixed(2);  
16.	                    }  
17.	                    else {  
18.	                        num = myseries[0].data[k].value;  
19.	                    }  
20.	                    res += myseries[0].name + ':' + num + "<br>";  
21.	                }  
22.	            }  
23.	            for (var k = 0; k < myseries[1].data.length; k++) {  
24.	                if (myseries[1].data[k].name == params.name) {  
25.	                                res += myseries[1].name + ':' + myseries[1].data[k].value + "<br>";  
26.	                    }  
27.	                }  
28.	            return res;  
29.	            }  
30.	        }  

 
