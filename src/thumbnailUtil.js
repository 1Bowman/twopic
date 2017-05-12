import * as firebase from 'firebase';
import _ from 'lodash';

export function getRandomThumbnail(){
  console.log('inside thumbnailUtil')

  const rootRef = firebase.database().ref()
  const thumbnailRef = rootRef.child('thumbnail')

  // const storageRef = firebase.storage().ref();
  // const fileName = '18121094_1499848123390827_3433065930687494666_o.jpg'
  // const spaceRef = storageRef.child(fileName)

  // this.setState({picPath: spaceRef.fullPath})

  thumbnailRef.once('value', snap => {
    const thumbnailList = snap.val()
    const totalThumbnails = Object.keys(thumbnailList)

    const randomThumbnail1 = thumbnailList[totalThumbnails[totalThumbnails.length ** Math.random() << 0]]
    let randomThumbnail2 = {}
    do {
      console.log('1', randomThumbnail1)
      randomThumbnail2 = thumbnailList[totalThumbnails[totalThumbnails.length ** Math.random() << 0]]
      console.log('2', randomThumbnail2)
    } while (randomThumbnail1 === randomThumbnail2)

    console.log('final', randomThumbnail1, randomThumbnail2)
    return [randomThumbnail1, randomThumbnail2]

  })

}
