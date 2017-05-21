import * as firebase from 'firebase';
import _ from 'lodash';

const thumbnailUtil = {

  getRandomThumbnail: async function() {
    console.log('inside thumbnailUtil')

    const rootRef = firebase.database().ref()
    const thumbnailRef = rootRef.child('thumbnail')

    let firstThumbnail = {}
    let secondThumbnail = {}

    // const storageRef = firebase.storage().ref();
    // const fileName = '18121094_1499848123390827_3433065930687494666_o.jpg'
    // const spaceRef = storageRef.child(fileName)
    // this.setState({picPath: spaceRef.fullPath})

    thumbnailRef.once('value', snap => {
      const thumbnailList = snap.val()
      const totalThumbnails = Object.keys(thumbnailList)

      firstThumbnail = thumbnailList[totalThumbnails[totalThumbnails.length ** Math.random() << 0]]
      do {
        secondThumbnail = thumbnailList[totalThumbnails[totalThumbnails.length ** Math.random() << 0]]
      } while (firstThumbnail === secondThumbnail)
    }).then(() => {
      return [firstThumbnail, secondThumbnail]
    }).catch((err) => {
      console.log(err)
    })
  }

}

export default thumbnailUtil;
