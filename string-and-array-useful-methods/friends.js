/* ২) একটা অ্যারেতে তোমার বন্ধু বা বান্ধুবির পুরা নাম রাখো এবং যাদের নাম md দিয়ে শুরু হয় সেই নামগুলো প্রথমে console log করবে। তারপর পুরা জিনিসটা একটা ফাংশনে রাখো। এবং তোমার কাজ হবে। যার যার নাম md দিয়ে শুরু হয়। সেই নামগুলো রিটার্ন করবে।  
এক্সট্রা: চেষ্টা করবে কারো নাম যদি MD বা Md বা md হয়। তাদের নাম যেন তোমার রিটার্ন রেজাল্টে যোগ হয়। */

const friends = ["mD rahim", "sokhina", "Md korim", "MD rasel"];

function friendFinder() {
  const searching = "md";
  const output = [];
  for (const friend of friends) {
    if (friend.toLowerCase().startsWith(searching.toLowerCase())) {
      output.push(friend);
    }
  }
  return output;
}
const myFriend = friendFinder(friends);
console.log(myFriend);
