export const formatData = (d: any) => {
  // 判断 d 是否是 object
  try {
    return d.toString()
  } catch (error) {
    return d
  }
}
