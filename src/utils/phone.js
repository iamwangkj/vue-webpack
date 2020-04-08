// 安卓6以下为低端机，其他为高端机
export const isLowPhone = () => {
  const ua = navigator.userAgent.toLowerCase()
  let version = null
  if (ua.indexOf('android') > 0) {
    const reg = /android [\d._]+/gi
    const vInfo = ua.match(reg)
    version = (vInfo + '').replace(/[^0-9|_.]/ig, '').replace(/_/ig, '.') // 得到版本号4.2.2
    version = parseInt(version.split('.')[0])// 得到版本号第一位

    if (version <= 6) {
      return true
    }
  }

  return false
}
