const express = require("express");
const app = express();
const http = require("http");
const PORT = process.env.PORT || 3000;

const gplay = require("google-play-scraper");
const Application = require("./Application");
const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://Admin:GSp07CnLoEfQnj40@project0-3sh2m.mongodb.net/analysis?retryWrites=true";

const collectData = () => {

  MongoClient.connect(uri, function(err, client) {
    let place = 0;
    if (err) {
      console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
    }
    console.log("Connected...");
    const db = client.db("analysis");
    const item1 = gplay.app({ appId: "com.facebook.orca" });
    const item2 = gplay.app({ appId: "com.facebook.mlite" });
    const item3 = gplay.app({ appId: "com.viber.voip" });
    const item4 = gplay.app({ appId: "sk.forbis.messenger" });
    const item5 = gplay.app({ appId: "org.telegram.plus" });
    const item6 = gplay.app({ appId: "com.aleskovacic.messenger" });
    const item7 = gplay.app({ appId: "org.thoughtcrime.securesms" });
    const item8 = gplay.app({ appId: "org.telegram.messenger" });
    const item9 = gplay.app({ appId: "messenger.social.chat.apps" });
    const item10 = gplay.app({ appId: "messenger.messenger.messanger.messenger" });
    const promise = Promise.all([
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
      item7,
      item8,
      item9,
      item10
    ]);
    promise
      .then(result => {
        const items = result.map(element => {
          place += 1;
          return new Application(
            element.appId,
            element.url,
            element.title,
            element.developer,
            element.score,
            element.ratings,
            element.histogram,
            element.size,
            place
          );
        });
        return db.collection("TopMessengers").insertMany(items);
      })
      .then(result => {
        console.log("Success");
        client.close();
      })
      .catch(err => {
        client.close();
      });
  });

  MongoClient.connect(uri, function(err, client) {
    let place = 0;
    if (err) {
      console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
    }
    console.log("Connected...");
    const db = client.db("analysis");
    const item1 = gplay.app({ appId: "com.colorup.game" });
    const item2 = gplay.app({ appId: "com.amanotes.pamadancingroad" });
    const item3 = gplay.app({ appId: "com.fugo.wow" });
    const item4 = gplay.app({ appId: "com.outfit7.mytalkingtom2" });
    const item5 = gplay.app({ appId: "io.voodoo.paper2" });
    const item6 = gplay.app({ appId: "com.mini.craft.minicraft.adventure.apps" });
    const item7 = gplay.app({ appId: "com.kiloo.subwaysurf" });
    const item8 = gplay.app({ appId: "com.tellurionmobile.realmcraft" });
    const item9 = gplay.app({ appId: "com.playgendary.tom" });
    const item10 = gplay.app({ appId: "com.amanotes.beathopper" });
    const promise = Promise.all([
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
      item7,
      item8,
      item9,
      item10
    ]);
    promise
      .then(result => {
        const items = result.map(element => {
          place += 1;
          return new Application(
            element.appId,
            element.url,
            element.title,
            element.developer,
            element.score,
            element.ratings,
            element.histogram,
            element.size,
            place
          );
        });
        return db.collection("TopFree").insertMany(items);
      })
      .then(result => {
        console.log("Success");
        client.close();
      })
      .catch(err => {
        client.close();
      });
  });

  MongoClient.connect(uri, function(err, client) {
    let place = 0;
    if (err) {
      console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
    }
    console.log("Connected...");
    const db = client.db("analysis");
    const item1 = gplay.app({ appId: "com.mojang.minecraftpe" });
    const item2 = gplay.app({ appId: "com.agaming.thesun.origin" });
    const item3 = gplay.app({ appId: "com.rockstargames.gtasa" });
    const item4 = gplay.app({ appId: "com.kozgames.motordepot" });
    const item5 = gplay.app({ appId: "age.of.civilizations.jakowski" });
    const item6 = gplay.app({ appId: "com.AngryNeighbor" });
    const item7 = gplay.app({ appId: "com.IvanKovalov.G30Android" });
    const item8 = gplay.app({ appId: "com.gm_shaber.dayrpremium" });
    const item9 = gplay.app({ appId: "com.giantssoftware.fs18.google" });
    const item10 = gplay.app({ appId: "com.jds.batim" });
    const promise = Promise.all([
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
      item7,
      item8,
      item9,
      item10
    ]);
    promise
      .then(result => {
        const items = result.map(element => {
          place += 1;
          return new Application(
            element.appId,
            element.url,
            element.title,
            element.developer,
            element.score,
            element.ratings,
            element.histogram,
            element.size,
            place
          );
        });
        return db.collection("TopPaid").insertMany(items);
      })
      .then(result => {
        console.log("Success");
        client.close();
      })
      .catch(err => {
        client.close();
      });
  });

  MongoClient.connect(uri, function(err, client) {
    let place = 0;
    if (err) {
      console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
    }
    console.log("Connected...");
    const db = client.db("analysis");
    const item1 = gplay.app({ appId: "com.igg.android.lordsmobile" });
    const item2 = gplay.app({ appId: "net.wargaming.wot.blitz" });
    const item3 = gplay.app({ appId: "com.dc.hwsj" });
    const item4 = gplay.app({ appId: "com.smallgiantgames.empires" });
    const item5 = gplay.app({ appId: "com.mobilewaronline.wwr" });
    const item6 = gplay.app({ appId: "com.lilithgame.roc.gp" });
    const item7 = gplay.app({ appId: "com.dts.freefireth" });
    const item8 = gplay.app({ appId: "com.igg.castleclash_ru" });
    const item9 = gplay.app({ appId: "com.supercell.brawlstars" });
    const item10 = gplay.app({ appId: "com.ea.gp.fifamobile" });
    const promise = Promise.all([
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
      item7,
      item8,
      item9,
      item10
    ]);
    promise
      .then(result => {
        const items = result.map(element => {
          place += 1;
          return new Application(
            element.appId,
            element.url,
            element.title,
            element.developer,
            element.score,
            element.ratings,
            element.histogram,
            element.size,
            place
          );
        });
        return db.collection("Bestsellers").insertMany(items);
      })
      .then(result => {
        console.log("Success");
        client.close();
      })
      .catch(err => {
        client.close();
      });
  });

};

// keep awaken
setInterval(function() {
  http.get("http://data-analisis.herokuapp.com");
}, 300000); 

const timeInterval = 1000 * 60 * 60;
collectData();

setInterval(collectData, timeInterval);

app.get("/", (req, res) => {
  res.send(`Hello World!`);
});

app.listen(PORT, () => {});
