<template lang='pug'>
.eg-theme-gourmet
  .eg-slideshow
    slide(repeat enter="zoomIn" leave="zoomOut" style="margin-top: 4em")
      h2 中国妇女的政治参与
      h4 基于第十三届全国人大代表的分析
      h5 Proudly presented by ZENG Chen
    slide(enter="zoomIn" leave="zoomOut" style="margin-top: 1.5em")
      h3 我们的问题
      ul(style="font-size: 1.4em")
        li 全国人大代表中女性占比如何？趋势如何？
        li 全国人大代表不同学科背景、学历层次的性别构成如何？
        li 哪个区域的女性代表比例最高？
        li 不同年龄段的代表性别构成如何？
        li 不同党派的代表性别构成是否存在差异？如果存在，差异如何？
        li 在世界范围内看，中国妇女参加全国立法机关的比例排名如何？趋势如何？
    slide(enter="zoomIn" leave="zoomOut")
      h4 第十三届全国人大代表男女性占比
      div(class="chartL divcenter")
        sex-ratio-pie(:men="npcSex['男']" :women="npcSex['女']")
    slide(enter="zoomIn" leave="zoomOut")
      h4 历届全国人大代表女性占比走势图
      div(class="chartRecL divcenter")
        npc-women-ratio
    slide(enter="zoomIn" leave="zoomOut")
      h4 自然科学背景还是社会科学背景的女性代表比例大？
      div(class="divCenterFlex")
        span 总性别比
          sex-ratio-pie(:men="npcSex['男']" :women="npcSex['女']" class="chartM")
          p 总人数：{{ npcSex['男'] + npcSex['女'] }}
        span 自然科学界
          sex-ratio-pie(:men="nsMale" :women="nsFemale" class="chartM")
          p 总人数：{{ nsMale + nsFemale }}
        span 社会科学界
          sex-ratio-pie(:men="ssMale" :women="ssFemale" class="chartM")
          p 总人数：{{ ssMale + ssFemale }}
        span 界别未知
          sex-ratio-pie(:men="dkMale" :women="dkFemale" class="chartM")
          p 总人数：{{ dkMale + dkFemale }}
    slide(enter="zoomIn" leave="zoomOut")
      h4 各学历层次女性代表比例如何？
      div(class="divCenterFlex divcenter")
        span 总性别比
          sex-ratio-pie(:men="npcSex['男']" :women="npcSex['女']" class="chartS")
          p 总人数：{{ npcSex['男'] + npcSex['女'] }}
        span 高中及以下
          sex-ratio-pie(:men="dlHSM" :women="dlHSF" class="chartS")
          p 总人数：{{ dlHSM + dlHSF }}
        span 大专
          sex-ratio-pie(:men="dlABM" :women="dlABF" class="chartS")
          p 总人数：{{ dlABM + dlABF }}
        span 本科
          sex-ratio-pie(:men="dlBAM" :women="dlBAF" class="chartS")
          p 总人数：{{ dlBAM + dlBAF }}
      div(class="divCenterFlex divcenter")
        span 硕士研究生
          sex-ratio-pie(:men="dlMAM" :women="dlMAF" class="chartS")
          p 总人数：{{ dlMAM + dlMAF }}
        span 博士研究生
          sex-ratio-pie(:men="dlPHDM" :women="dlPHDF" class="chartS")
          p 总人数：{{ dlPHDM + dlPHDF }}
        span 未知
          sex-ratio-pie(:men="dlDKM" :women="dlDKF" class="chartS")
          p 总人数：{{ dlDKM + dlDKF }}
    slide(enter="zoomIn" leave="zoomOut")
      h4 各区域女性代表比例如何？
      div(class="divCenterFlex divcenter")
        span 总性别比
          sex-ratio-pie(:men="npcSex['男']" :women="npcSex['女']" class="chartS")
          p 总人数：{{ npcSex['男'] + npcSex['女'] }}
        span 东北
          sex-ratio-pie(:men="rNEM" :women="rNEF" class="chartS")
          p 总人数：{{ rNEM + rNEF }}
        span 东部
          sex-ratio-pie(:men="rEM" :women="rEF" class="chartS")
          p 总人数：{{ rEM + rEF }}
      div(class="divCenterFlex divcenter")
        span 西部
          sex-ratio-pie(:men="rWM" :women="rWF" class="chartS")
          p 总人数：{{ rWM + rWF }}
        span 中部
          sex-ratio-pie(:men="rCM" :women="rCF" class="chartS")
          p 总人数：{{ rCM + rCF }}
        span 港澳台
          sex-ratio-pie(:men="rHMTM" :women="rHMTF" class="chartS")
          p 总人数：{{ rHMTM + rHMTF }}
    slide(enter="zoomIn" leave="zoomOut")
      h4 各年龄段女性代表比例如何？
      div(class="divCenterFlex divcenter")
        span 20后
          sex-ratio-pie(:men="a20M" :women="a20F" class="chartS")
          p 总人数：{{ a20M + a20F }}
        span 30后
          sex-ratio-pie(:men="a30M" :women="a30F" class="chartS")
          p 总人数：{{ a30M + a30F }}
        span 40后
          sex-ratio-pie(:men="a40M" :women="a40F" class="chartS")
          p 总人数：{{ a40M + a40F }}
        span 50后
          sex-ratio-pie(:men="a50M" :women="a50F" class="chartS")
          p 总人数：{{ a50M + a50F }}
      div(class="divCenterFlex divcenter")
        span 60后
          sex-ratio-pie(:men="a60M" :women="a60F" class="chartS")
          p 总人数：{{ a60M + a60F }}
        span 70后
          sex-ratio-pie(:men="a70M" :women="a70F" class="chartS")
          p 总人数：{{ a70M + a70F }}
        span 80后
          sex-ratio-pie(:men="a80M" :women="a80F" class="chartS")
          p 总人数：{{ a80M + a80F }}
        span 90后
          sex-ratio-pie(:men="a90M" :women="a90F" class="chartS")
          p 总人数：{{ a90M + a90F }}
    slide(enter="zoomIn" leave="zoomOut")
      h4 各党派女性代表比例如何？
      div(class="divCenterFlex divcenter")
        span 中共
          sex-ratio-pie(:men="pCPM" :women="pCPF" class="chartS")
          p 总人数：{{ pCPM + pCPF }}
        span 民革
          sex-ratio-pie(:men="pMGM" :women="pMGF" class="chartS")
          p 总人数：{{ pMGM + pMGF }}
        span 民盟
          sex-ratio-pie(:men="pMMM" :women="pMMF" class="chartS")
          p 总人数：{{ pMMM + pMMF }}
        span 民建
          sex-ratio-pie(:men="pMJM" :women="pMJF" class="chartS")
          p 总人数：{{ pMJM + pMJF }}
        span 民促
          sex-ratio-pie(:men="pMJM" :women="pMJF" class="chartS")
          p 总人数：{{ pMJM + pMJF }}
      div(class="divCenterFlex divcenter")
        span 农工党
          sex-ratio-pie(:men="pNGM" :women="pNGF" class="chartS")
          p 总人数：{{ pNGM + pNGF }}
        span 致公党
          sex-ratio-pie(:men="pZGM" :women="pZGF" class="chartS")
          p 总人数：{{ pZGM + pZGF }}
        span 九三学社
          sex-ratio-pie(:men="p93M" :women="p93F" class="chartS")
          p 总人数：{{ p93M + p93F }}
        span 台盟
          sex-ratio-pie(:men="pTMM" :women="pTMF" class="chartS")
          p 总人数：{{ pTMM + pTMF }}
        span 无党派
          sex-ratio-pie(:men="pNOM" :women="pNOF" class="chartS")
          p 总人数：{{ pNOM + pNOF }}
    slide(enter="zoomIn" leave="zoomOut")
      h4 五大社会主义国家的女性在全国议会中占比走势图
      div(class="chartRecL divcenter")
        comparative-socialist-countries
    slide(enter="zoomIn" leave="zoomOut")
      h4 东亚五国的女性在全国议会中占比走势图
      div(class="chartRecL divcenter")
        comparative-east-asia
    slide(enter="zoomIn" leave="zoomOut")
      h4 国内生产总值与中国接近的国家
        br
        span 女性在全国议会中占比比较（据IMF 2018数据）
      div(class="chartRecL divcenter")
        comparative-total-gdp
    slide(enter="zoomIn" leave="zoomOut")
      h4 人类发展指数与中国接近的国家
        br
        span 女性在全国议会中占比比较（据联合国2018数据）
      div(class="chartRecL divcenter")
        comparative-hdi
    slide(enter="zoomIn" leave="zoomOut")
      h4 人均国内生产总值与中国接近的国家
        br
        span 女性在全国议会中占比比较（据IMF 2018数据）
      div(class="chartRecL divcenter")
        comparative-ave-gdp
    slide(enter="zoomIn" leave="zoomOut")
      h4 中美两国女性在全国议会中的占比在全球的排名
      div(class="chartRecL divcenter")
        china-us-ranking
    slide(enter="zoomIn" leave="zoomOut")
      h2 感谢观看！
      h4 数据来源
      p(style="font-family: serif; text-align: center")
        p 第十三届全国人大代表数据抓取自
          a(href="https://news.cgtn.com/event/2019/whorunschina/index.html") CGTN: Who runs China?
        p 中国全国人大代表数据转引自维基百科
          a(href="https://zh.wikipedia.org/wiki/全国人民代表大会") 全国人民代表大会
          span 词条
        p 其他国家议会数据来自Inter-Parliamentary Union提供的
          a(href="https://data.ipu.org/compare?field=chamber%3A%3Acurrent_women_percent&structure=any__lower_chamber#map") Percentage of Women
          span 数据库，中国全国人大的数据在其中也有记录
</template>

<script>
import { Slideshow } from 'eagle.js'
import SexRatioPie from '../components/SexRatioPie.js'
import NpcWomenRatio from '../components/NpcWomenRatio.js'
import ComparativeSocialistCountries from '../components/ComparativeSocialistCountries.js'
import ChinaUsRanking from '../components/ChinaUSRanking.js'
import ComparativeHdi from '../components/ComparativeHDI.js'
import ComparativeAveGdp from '../components/ComparativeAveGDP.js'
import ComparativeTotalGdp from '../components/ComparativeTotalGDP.js'
import ComparativeEastAsia from '../components/ComparativeEastAsia.js'

var fly = require('flyio')
let deputies = null

export default {
  mixins: [Slideshow],
  data() {
    return {
      npcSex: {},
      // 学科界别
      nsMale: 0, // 自然科学
      nsFemale: 0,
      ssMale: 0, // 社会科学
      ssFemale: 0,
      dkMale: 0, // 未知
      dkFemale: 0,
      // 学历层次
      dlDKM: 0,
      dlHSM: 0,
      dlABM: 0,
      dlBAM: 0,
      dlMAM: 0,
      dlPHDM: 0,
      dlDKF: 0,
      dlHSF: 0,
      dlABF: 0,
      dlBAF: 0,
      dlMAF: 0,
      dlPHDF: 0,
      // 区域
      rNEM: 0,
      rEM: 0,
      rCM: 0,
      rWM: 0,
      rHMTM: 0,
      rNEF: 0,
      rEF: 0,
      rCF: 0,
      rWF: 0,
      rHMTF: 0,
      // 年龄段
      a20M: 0,
      a30M: 0,
      a40M: 0,
      a50M: 0,
      a60M: 0,
      a70M: 0,
      a80M: 0,
      a90M: 0,
      a20F: 0,
      a30F: 0,
      a40F: 0,
      a50F: 0,
      a60F: 0,
      a70F: 0,
      a80F: 0,
      a90F: 0,
      // 党派
      pCPM: 0,
      pMGM: 0,
      pMMM: 0,
      pMJM: 0,
      pMCM: 0,
      pNGM: 0,
      pZGM: 0,
      p93M: 0,
      pTMM: 0,
      pNOM: 0,
      pCPF: 0,
      pMGF: 0,
      pMMF: 0,
      pMJF: 0,
      pMCF: 0,
      pNGF: 0,
      pZGF: 0,
      p93F: 0,
      pTMF: 0,
      pNOF: 0
    }
  },
  components: {
    SexRatioPie,
    NpcWomenRatio,
    ComparativeSocialistCountries,
    ChinaUsRanking,
    ComparativeHdi,
    ComparativeAveGdp,
    ComparativeTotalGdp,
    ComparativeEastAsia
  },
  methods: {
    countDeputies(x) {
      let arr = []
      for (let i = 1; i < deputies.length; i++) {
        arr.push(deputies[i][x])
      }
      return this.count(arr)
    },
    countDeputiesX(x, extraArr) {
      let arr = []
      for (let i = 0; i < extraArr.length; i++) {
        arr.push(extraArr[i][x])
      }
      return this.count(arr)
    },
    count(arr) {
      let sorted = arr.sort()
      let len = sorted.length
      let obj = {}
      for (let i = 0; i < len; i++) {
        if (obj[arr[i]]) {
          obj[arr[i]]++
        } else {
          obj[arr[i]] = 1
        }
      }
      return obj
    },
    // 提取子串
    extract(index, str) {
      let arr = []
      for (let i = 1; i < deputies.length; i++) {
        if (deputies[i][index] === str) arr.push(deputies[i])
      }
      return arr
    }
  },
  created() {
    fly.get('/deputies.json').then(res => {
      deputies = res.data
      // 按性别统计，并绘制饼图
      this.npcSex = this.countDeputies(6)
      // 计算自然科学、社会科学中男女比例
      let ss = this.countDeputiesX(6, this.extract(18, '社会科学'))
      let ns = this.countDeputiesX(6, this.extract(18, '自然科学'))
      let dk = this.countDeputiesX(6, this.extract(18, '未知'))
      this.ssMale = ss['男']
      this.nsMale = ns['男']
      this.dkMale = dk['男']
      this.ssFemale = ss['女']
      this.nsFemale = ns['女']
      this.dkFemale = dk['女']
      console.log(this.countDeputies(9))
      // 计算各个学历层次中的男女比例
      let dlDK = this.countDeputiesX(6, this.extract(22, '未知'))
      let dlHS = this.countDeputiesX(6, this.extract(22, '高中及以下'))
      let dlAB = this.countDeputiesX(6, this.extract(22, '大专'))
      let dlBA = this.countDeputiesX(6, this.extract(22, '本科'))
      let dlMA = this.countDeputiesX(6, this.extract(22, '硕士研究生'))
      let dlPHD = this.countDeputiesX(6, this.extract(22, '博士研究生'))
      this.dlDKM = dlDK['男']
      this.dlHSM = dlHS['男']
      this.dlABM = dlAB['男']
      this.dlBAM = dlBA['男']
      this.dlMAM = dlMA['男']
      this.dlPHDM = dlPHD['男']
      this.dlDKF = dlDK['女']
      this.dlHSF = dlHS['女']
      this.dlABF = dlAB['女']
      this.dlBAF = dlBA['女']
      this.dlMAF = dlMA['女']
      this.dlPHDF = dlPHD['女']
      // 计算各个区域中的男女比例
      let rNE = this.countDeputiesX(6, this.extract(16, '东北'))
      let rE = this.countDeputiesX(6, this.extract(16, '东部'))
      let rC = this.countDeputiesX(6, this.extract(16, '中部'))
      let rW = this.countDeputiesX(6, this.extract(16, '西部'))
      let rHMT = this.countDeputiesX(6, this.extract(16, '港澳台'))
      this.rNEM = rNE['男']
      this.rEM = rE['男']
      this.rCM = rC['男']
      this.rWM = rW['男']
      this.rHMTM = rHMT['男']
      this.rNEF = rNE['女']
      this.rEF = rE['女']
      this.rCF = rC['女']
      this.rWF = rW['女']
      this.rHMTF = rHMT['女']
      // 计算各党派中的男女比例
      let pCP = this.countDeputiesX(6, this.extract(2, '中共'))
      let pMG = this.countDeputiesX(6, this.extract(2, '民革'))
      let pMM = this.countDeputiesX(6, this.extract(2, '民主同盟'))
      let pMJ = this.countDeputiesX(6, this.extract(2, '民主建国会'))
      let pMC = this.countDeputiesX(6, this.extract(2, '中国民主促进会'))
      let pNG = this.countDeputiesX(6, this.extract(2, '农工党'))
      let pZG = this.countDeputiesX(6, this.extract(2, '致公党'))
      let p93 = this.countDeputiesX(6, this.extract(2, '九三学社'))
      let pTM = this.countDeputiesX(6, this.extract(2, '台盟'))
      let pNO = this.countDeputiesX(6, this.extract(2, '无'))
      this.pCPM = pCP['男']
      this.pMGM = pMG['男']
      this.pMMM = pMM['男']
      this.pMJM = pMJ['男']
      this.pMCM = pMC['男']
      this.pNGM = pNG['男']
      this.pZGM = pZG['男']
      this.p93M = p93['男']
      this.pTMM = pTM['男']
      this.pNOM = pNO['男']
      this.pCPF = pCP['女']
      this.pMGF = pMG['女']
      this.pMMF = pMM['女']
      this.pMJF = pMJ['女']
      this.pMCF = pMC['女']
      this.pNGF = pNG['女']
      this.pZGF = pZG['女']
      this.p93F = p93['女']
      this.pTMF = pTM['女']
      this.pNOF = pNO['女']
      // 计算不同年代的人的男女比例
      let a20 = this.countDeputiesX(6, this.extract(9, '1920s'))
      let a30 = this.countDeputiesX(6, this.extract(9, '1930s'))
      let a40 = this.countDeputiesX(6, this.extract(9, '1940s'))
      let a50 = this.countDeputiesX(6, this.extract(9, '1950s'))
      let a60 = this.countDeputiesX(6, this.extract(9, '1960s'))
      let a70 = this.countDeputiesX(6, this.extract(9, '1970s'))
      let a80 = this.countDeputiesX(6, this.extract(9, '1980s'))
      let a90 = this.countDeputiesX(6, this.extract(9, '1990s'))
      this.a20M = a20['男']
      this.a30M = a30['男']
      this.a40M = a40['男']
      this.a50M = a50['男']
      this.a60M = a60['男']
      this.a70M = a70['男']
      this.a80M = a80['男']
      this.a90M = a90['男']
      this.a20F = a20['女']
      this.a30F = a30['女']
      this.a40F = a40['女']
      this.a50F = a50['女']
      this.a60F = a60['女']
      this.a70F = a70['女']
      this.a80F = a80['女']
      this.a90F = a90['女']
    })
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Roboto|ZCOOL+XiaoWei');
.eg-slideshow {
  .eg-slide {
    .eg-slide-content {
      width: 40em;
      max-width: 80%;
      margin: 0 auto;
    }
  }
}
.eg-slide-content {
  width: 25em;
  max-width: 80%;
  margin: 0 auto;
}
h2,
h3,
h4 {
  font-family: 'ZCOOL XiaoWei' !important;
  text-align: center;
}
h5 {
  text-align: center;
  font-family: 'Bad Script';
}
.divCenterFlex {
  display: flex;
  text-align: center;
}
.chartS {
  width: 5.5em;
  height: 5.5em;
  text-align: center;
}
.chartM {
  width: 10em;
  height: 10em;
  text-align: center;
}
.chartL {
  width: 15em;
  height: 15em;
  text-align: center;
}
.chartRecL {
  width: 85%;
  height: auto;
  text-align: center;
  position: relative;
}
.divcenter {
  margin-left: auto;
  margin-right: auto;
}
</style>
