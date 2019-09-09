// import { async } from "q"

// // Need to fix up the functionality of this page so that I can properly search for different projects

// const portfolioConfig = {
//   //   getSearchArray: arr => {
//   //     let searchResults = []
//   //     for (let i = 0; i < arr.length; i++) {
//   //       let searchTerm = {
//   //         projectName: arr[i].node.projectTitle,
//   //         techUsed: arr[i].node.techUsed,
//   //         publishedDate: arr[i].node.publishedDate,
//   //         slug: arr[i].node.slug,
//   //         mainProjectImage: arr[i].node.mainProjectImage.file.url,
//   //         shortHook: arr[i].node.shortHook,
//   //       }
//   //       searchResults.push(searchTerm)
//   //     }
//   //     return searchResults
//   //   },

//   findItem: (item, arr) => {
//     let result = arr.indexOf(item)
//     return result
//   },

//   filterTerm: (category, term, arr) => {
//     console.log(category, term, arr)
//     let results = []
//     let dates = []

//     // const getCategoryArray = data => {
//     //   console.log(data)
//     //   let array = data.split(", ")
//     //   console.log(array)
//     //   return array
//     // }

//     const search = async data => {
//       console.log("==============")
//       console.log(data)
//       let search = data.node.techUsed
//       console.log(search)
//       console.log(term)
//       await search.forEach(index => {
//         console.log(index)
//         if (index === term) {
//           results.push(data)
//           console.log(results)
//         }
//       })
//     }

//     const getDates = data => {
//       dates.push(data)
//     }

//     const getFilteredData = () => {
//       arr.forEach(index => {
//         console.log(index)
//         switch (category) {
//           case "Tech":
//             let data = getCategoryArray(index.node.techUsed)
//             index.node.techUsed = data
//             search(index)
//             console.log("RIGHT BEFORE RETURN")
//             console.log(results)
//             return results

//           case "Dates":
//             getDates(index, index.publishedDate)
//             return dates
//         }
//       })
//     }
//     console.log("filtered data", getFilteredData())
//     return getFilteredData()
//   },
// }

// export default portfolioConfig
