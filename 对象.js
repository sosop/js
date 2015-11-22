// 对象是对动态的
/**
创建对象： 1、直接量 2、new 3、Object.create()
*/
var obj = {
	p1: "p1",
	p2: "p2",
	p3: {
		p31: "p31",
		p32: "p32"
	}
};

function Construct() {

}

var o1 = new Construct();

var o2 = Object.create({p1: "p1", p2: "p2"});

var o3 = Object.create(Object.prototype);

// 属性查询设置
obj.propertyName;
obj["propertyName"];

for(p in obj["p3"]) {
	alert(obj.p3[p]);
}

// 属性访问错误
undefined
//判断o是否undefined null
if (o) {

}

// 删除属性
delete obj.p1
delete obj["p2"]

// 检测属性
in hasOwnProperty() propertyIsEnumerable()
"p1" in obj // true
obj.hasOwnProperty("p2")
obj.propertyIsEnumerable("p3")
obj["p1"] !== undefined

// 存储器属性
var objGS = {
	$k: 0
	set x(v) {
		$k = v
	}
	get x() {
		return $k
	}
}
