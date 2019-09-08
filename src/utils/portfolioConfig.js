// Need to fix up the functionality of this page so that I can properly search for different projects

const portfolioConfig = {
  getSearchArray: arr => {
    let searchResults = []
    for (let i = 0; i < arr.length; i++) {
      let searchTerm = {
        projectName: arr[i].node.projectTitle,
        techUsed: arr[i].node.techUsed,
        publishedDate: arr[i].node.publishedDate,
        slug: arr[i].node.slug,
        mainProjectImage: arr[i].node.mainProjectImage.file.url,
        shortHook: arr[i].node.shortHook,
      }
      searchResults.push(searchTerm)
    }
    return searchResults
  },

  findItem: (item, arr) => {
    let result = arr.indexOf(item)
    return result
  },

  filterTerm: (category, term, arr) => {
    console.log(category, term, arr)
    let results = []
    let dates = []

    const getCategoryArray = (arr, data) => {
      console.log(data)
      let array = data.split(", ")
      console.log(array)
      return array
    }

    const search = data => {
      console.log("search function data")
      console.log(data)
      data.forEach(index => {
        console.log(term)
        console.log(index)
        if (index === term) {
          results.push(index)
        }
      })
    }

    const getDates = data => {
      dates.push(data)
    }

    let filteredData = arr.forEach(index => {
      console.log("==============")
      console.log(index)
      switch (category) {
        case "Tech":
          let data = getCategoryArray(index, index.node.techUsed)
          search(data)
          return results

        case "Dates":
          getDates(index, index.publishedDate)
          return dates
      }
    })

    // const getFinalData = () => {
    //     let finalResults = [];

    //     arr.forEach(index => {
    //         switch(category) {
    //             case "Tech":
    //                 if(index)
    //         }
    //     })
    // }
    console.log("()()()()()()()(")
    console.log(filteredData)

    filteredData
  },
}

export default portfolioConfig
