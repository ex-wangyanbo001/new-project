<template>
  <div>
    <div>拒贷理由</div>
    <div v-for="(item,index) in lists" :key="index">
        <div>{{item.title}}</div>
        <div class="each-item" v-for="(items,indexs) in item.list" :key="indexs" @click="subm(index,indexs)">
            
           <div>
               <img :src="!items.isSelect?require('@/assets/images/icwxz.png'):require('@/assets/images/icyxz.png')" alt="">
            </div> 
           <div>{{items.optionValue}}:{{items.optionName}}</div> 
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        // isSelect:'',
        // click:'true',
      arr: {
        持照异常: [
          {
            optionId: "20191128a9a763ae9d0a42d3a91a99918394a9c0",
            createTime: 1574929260881,
            updateTime: 1574929260881,
            optionType: "CATEGORY_YN5",
            optionName: "未正确上传手持照",
            optionDesc: "U",
            optionValue: "b01",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350409",
            createTime: 1575959394,
            updateTime: 1575959394,
            optionType: "CATEGORY_YN5",
            optionName: "手持照模糊",
            optionDesc: "U",
            optionValue: "b02",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350410",
            createTime: 1575959394,
            updateTime: 1575959394,
            optionType: "CATEGORY_YN5",
            optionName: "手持照片不符合规范",
            optionDesc: "U",
            optionValue: "b03-1",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350411",
            createTime: 1575959394,
            updateTime: 1575959394,
            optionType: "CATEGORY_YN5",
            optionName: "手持照片不符合规范",
            optionDesc: "U",
            optionValue: "b03-2",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350412",
            createTime: 1575959394,
            updateTime: 1575959394,
            optionType: "CATEGORY_YN5",
            optionName: "照片伪造",
            optionDesc: "U",
            optionValue: "b04",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350413",
            createTime: 1575959394,
            updateTime: 1575959394,
            optionType: "CATEGORY_YN5",
            optionName: "伪冒",
            optionDesc: "U",
            optionValue: "b05",
            state: 1
          }
        ],
        预留信息不匹配: [
          {
            optionId: "20191210171632206821939388350419",
            createTime: 1577696327,
            updateTime: 1577696327,
            optionType: "CATEGORY_YN9",
            optionName: "姓名不符：报错或无法报出预留全名",
            optionDesc: "C",
            optionValue: "e10",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350420",
            createTime: 1577696327,
            updateTime: 1577696327,
            optionType: "CATEGORY_YN9",
            optionName: "生日不符：报错或无法报出生日",
            optionDesc: "C",
            optionValue: "e11",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350421",
            createTime: 1577696327,
            updateTime: 1577696327,
            optionType: "CATEGORY_YN9",
            optionName: "年龄不符：报错或无法报出年龄",
            optionDesc: "C",
            optionValue: "e12",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350422",
            createTime: 1577696327,
            updateTime: 1577696327,
            optionType: "CATEGORY_YN9",
            optionName: "星座不符：报错或无法报出星座",
            optionDesc: "C",
            optionValue: "e13",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350423",
            createTime: 1577696328,
            updateTime: 1577696328,
            optionType: "CATEGORY_YN9",
            optionName: "证件号码（或证件号码后四位）不符",
            optionDesc: "C",
            optionValue: "e14",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350424",
            createTime: 1577696328,
            updateTime: 1577696328,
            optionType: "CATEGORY_YN9",
            optionName: "居住地址不符：报错或无法报出预留居住地址",
            optionDesc: "C",
            optionValue: "e15",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350425",
            createTime: 1577696328,
            updateTime: 1577696328,
            optionType: "CATEGORY_YN9",
            optionName: "邮箱不符：报错或无法报出预留邮箱",
            optionDesc: "C",
            optionValue: "e16",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350426",
            createTime: 1577696328,
            updateTime: 1577696328,
            optionType: "CATEGORY_YN9",
            optionName: "亲密联系人配偶信息不符",
            optionDesc: "C",
            optionValue: "e17",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350427",
            createTime: 1577696328,
            updateTime: 1577696328,
            optionType: "CATEGORY_YN9",
            optionName: "距离不符：报错或无法报出居住地和工作地之间的距离",
            optionDesc: "C",
            optionValue: "e18",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350428",
            createTime: 1577696328,
            updateTime: 1577696328,
            optionType: "CATEGORY_YN9",
            optionName:
              "申请人是否正常回答，不存在迟疑等现象，需审核员整体判断。",
            optionDesc: "C",
            optionValue: "e19",
            state: 1
          },
          {
            optionId: "20200102171632206821939388350402",
            createTime: 1577935372,
            updateTime: 1577935372,
            optionType: "CATEGORY_YN9",
            optionName: "申请人语言无法沟通",
            optionDesc: "C",
            optionValue: "e20",
            state: 1
          }
        ],
        "手持/证件/活体照不一致": [
          {
            optionId: "20191210171632206821939388350414",
            createTime: 1575959394,
            updateTime: 1575959394,
            optionType: "CATEGORY_YN6",
            optionName: "手持照与证件照不符",
            optionDesc: "U",
            optionValue: "c01",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350415",
            createTime: 1575959394,
            updateTime: 1575959394,
            optionType: "CATEGORY_YN6",
            optionName: "手持证件照不一致",
            optionDesc: "U",
            optionValue: "c02",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350416",
            createTime: 1575959395,
            updateTime: 1575959395,
            optionType: "CATEGORY_YN6",
            optionName: "证件不一致",
            optionDesc: "U",
            optionValue: "c03",
            state: 1
          },
          {
            optionId: "20200102171632206821939388350401",
            createTime: 1577935371,
            updateTime: 1577935371,
            optionType: "CATEGORY_YN6",
            optionName: "活体照与手持照不符",
            optionDesc: "U",
            optionValue: "c04",
            state: 1
          }
        ],
        Aadhaar卡拍摄问题: [
          {
            optionId: "20191210171632206821939388350404",
            createTime: 1575962110,
            updateTime: 1575962110,
            optionType: "CATEGORY_YN3",
            optionName: "未正确上传证件照片",
            optionDesc: "U",
            optionValue: "a01-2",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350405",
            createTime: 1575962110,
            updateTime: 1575962110,
            optionType: "CATEGORY_YN3",
            optionName: "证件模糊",
            optionDesc: "U",
            optionValue: "a02-2",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350406",
            createTime: 1575962110,
            updateTime: 1575962110,
            optionType: "CATEGORY_YN3",
            optionName: "证件不全",
            optionDesc: "U",
            optionValue: "a03-2",
            state: 1
          }
        ],
        紧急联系人电话无效拒贷: [
          {
            optionId: "20191210171632206821939388350429",
            createTime: 1575959396,
            updateTime: 1575959396,
            optionType: "CATEGORY_YN10",
            optionName: "拨打紧密联系人手机号码无效",
            optionDesc: "C",
            optionValue: "e05",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350430",
            createTime: 1575959396,
            updateTime: 1575959396,
            optionType: "CATEGORY_YN10",
            optionName: "两次拨打紧密联系人手机无人接听",
            optionDesc: "C",
            optionValue: "e06",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350431",
            createTime: 1575959396,
            updateTime: 1575959396,
            optionType: "CATEGORY_YN10",
            optionName: "拨打紧密联系人手机，紧密联系人多次挂掉",
            optionDesc: "C",
            optionValue: "e07",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350432",
            createTime: 1575959396,
            updateTime: 1575959396,
            optionType: "CATEGORY_YN10",
            optionName: "接通紧密联系人后，紧密联系人表示不认识借款人",
            optionDesc: "C",
            optionValue: "e08",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350433",
            createTime: 1577696327,
            updateTime: 1577696327,
            optionType: "CATEGORY_YN10",
            optionName: "接通紧密联系人后，紧密联系人非借款人所写的关系",
            optionDesc: "C",
            optionValue: "e09",
            state: 1
          },
          {
            optionId: "20200102171632206821939388350403",
            createTime: 1577935372,
            updateTime: 1577935372,
            optionType: "CATEGORY_YN10",
            optionName: "紧密联系人语言无法沟通（两个都无法沟通）",
            optionDesc: "C",
            optionValue: "e21",
            state: 1
          }
        ],
        Aadhaar卡证件异常: [
          {
            optionId: "20191210171632206821939388350407",
            createTime: 1575962110,
            updateTime: 1575962110,
            optionType: "CATEGORY_YN4",
            optionName: "照片伪造",
            optionDesc: "U",
            optionValue: "a04-2",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350408",
            createTime: 1575962111,
            updateTime: 1575962111,
            optionType: "CATEGORY_YN4",
            optionName: "证件过期",
            optionDesc: "U",
            optionValue: "a05-2",
            state: 1
          }
        ],
        其他拒贷: [
          {
            optionId: "20191210171632206821939388350417",
            createTime: 1575959395,
            updateTime: 1575959395,
            optionType: "CATEGORY_YN7",
            optionName: "其他拒贷",
            optionDesc: "U",
            optionValue: "z01",
            state: 1
          }
        ],
        其他: [
          {
            optionId: "20200102171632206821939388350404",
            createTime: 1577935372,
            updateTime: 1577935372,
            optionType: "CATEGORY_YN11",
            optionName: "证件审核不通过",
            optionDesc: "C",
            optionValue: "e98",
            state: 1
          },
          {
            optionId: "20200102171632206821939388350405",
            createTime: 1577935373,
            updateTime: 1577935373,
            optionType: "CATEGORY_YN11",
            optionName: "其他",
            optionDesc: "C",
            optionValue: "e99",
            state: 1
          }
        ],
        "公司/职业信息不匹配": [
          {
            optionId: "20191210171632206821939388350434",
            createTime: 1575959397,
            updateTime: 1575959397,
            optionType: "CATEGORY_YN12",
            optionName: "公司名称不符",
            optionDesc: "C",
            optionValue: "f01",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350435",
            createTime: 1575959397,
            updateTime: 1575959397,
            optionType: "CATEGORY_YN12",
            optionName: "公司电话不符",
            optionDesc: "C",
            optionValue: "f02",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350436",
            createTime: 1575959397,
            updateTime: 1575959397,
            optionType: "CATEGORY_YN12",
            optionName: "公司地址不符",
            optionDesc: "C",
            optionValue: "f03",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350437",
            createTime: 1575959397,
            updateTime: 1575959397,
            optionType: "CATEGORY_YN12",
            optionName: "职业类型拒贷",
            optionDesc: "C",
            optionValue: "f09",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350438",
            createTime: 1577696328,
            updateTime: 1577696328,
            optionType: "CATEGORY_YN12",
            optionName: "工资信息不符",
            optionDesc: "C",
            optionValue: "f10",
            state: 1
          }
        ],
        Pan卡拍摄问题: [
          {
            optionId: "2019112805b846de98de43518d6fabc060532b81",
            createTime: 1574929128967,
            updateTime: 1574929128967,
            optionType: "CATEGORY_YN1",
            optionName: "未正确上传证件照片",
            optionDesc: "U",
            optionValue: "a01-1",
            state: 1
          },
          {
            optionId: "2019112856770db31288492a883d5e06d35f43cd",
            createTime: 1574929209411,
            updateTime: 1574929209411,
            optionType: "CATEGORY_YN1",
            optionName: "证件模糊",
            optionDesc: "U",
            optionValue: "a02-1",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350401",
            createTime: 1575962097,
            updateTime: 1575962097,
            optionType: "CATEGORY_YN1",
            optionName: "证件不全",
            optionDesc: "U",
            optionValue: "a03-1",
            state: 1
          }
        ],
        本人电话无效拒贷: [
          {
            optionId: "20191128439d7697fc1f4268bdbf29e38cdc30f6",
            createTime: 1574929318613,
            updateTime: 1574929318613,
            optionType: "CATEGORY_YN8",
            optionName: "拨打客户手机号码无效",
            optionDesc: "C",
            optionValue: "e01",
            state: 1
          },
          {
            optionId: "20191128b65666e60a314bcaaec34b889b89e458",
            createTime: 1574931926503,
            updateTime: 1574931926503,
            optionType: "CATEGORY_YN8",
            optionName: "两次拨打客户手机无人接听",
            optionDesc: "C",
            optionValue: "e02",
            state: 1
          },
          {
            optionId: "201911289fc45f36895d4803b44820872220b457",
            createTime: 1574931936827,
            updateTime: 1574931936827,
            optionType: "CATEGORY_YN8",
            optionName: "拨打客户手机，客户多次挂掉",
            optionDesc: "C",
            optionValue: "e03",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350418",
            createTime: 1575959395,
            updateTime: 1575959395,
            optionType: "CATEGORY_YN8",
            optionName: "拨打客户手机，客户表示非本人申请借款",
            optionDesc: "C",
            optionValue: "e04",
            state: 1
          }
        ],
        Pan卡证件异常: [
          {
            optionId: "20191210171632206821939388350402",
            createTime: 1575962097,
            updateTime: 1575962097,
            optionType: "CATEGORY_YN2",
            optionName: "照片伪造",
            optionDesc: "U",
            optionValue: "a04-1",
            state: 1
          },
          {
            optionId: "20191210171632206821939388350403",
            createTime: 1575962097,
            updateTime: 1575962097,
            optionType: "CATEGORY_YN2",
            optionName: "证件过期",
            optionDesc: "U",
            optionValue: "a05-1",
            state: 1
          }
        ]
      },
      lists:[]
    };
  },
  created() {
    this.fun();
  },
  methods: {
    fun() {
      for (let key in this.arr) {
        // console.log(this.arr[key]);
        // console.log(key)
        let obj={title:key,list:this.arr[key]}
        let lists=this.lists
        lists.push(obj)
        this.lists=lists
        // console.log(this.lists)
      }
    },
    subm(index,indexs){
      let aa=this.lists
      
        if(aa[index].list[indexs].isSelect){
                  aa[index].list[indexs].isSelect=false
                    console.log(11111111111)
            }else{
               aa[index].list[indexs].isSelect=true
               }
               console.log(aa[index].list[indexs].isSelect)
        // this.lists=aa 
        this.$set(this.lists,index,aa[index])    

    }
  }
};
</script>

<style lang="less" scoped>
    .each-item{
        display: flex;
        padding-left: 40px;
        padding-top: 20px;
        // justify-content: center;
        // align-items: center;
    }
  img{
      margin-right: 20px;
      width: 32px;
      height: 32px;
  }
</style>