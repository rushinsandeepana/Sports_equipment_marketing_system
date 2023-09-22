import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
// import 'package:flutter_image_slider/carousel.dart';
// import 'package:fan_carousel_image_slider/fan_carousel_image_slider.dart';
import 'NavBar.dart';
// import 'package:flexi_image_slider/flexi_image_slider.dart';

class DashboardPage extends StatefulWidget {
  const DashboardPage({super.key});

  @override
  State<DashboardPage> createState() => _DashboardPageState();
}

class _DashboardPageState extends State<DashboardPage> {

  // List<String> arrayImages = [

  //   "https://cdn11.bigcommerce.com/s-3954e/images/stencil/500x659/products/11676/24832/Super-Select-2-for-web-copy-scaled__12026.1691595132.jpg?c=2",
  //   "https://www.dnc.lk/wp-content/uploads/2022/05/283091806_173638568418801_987888092371503772_n.jpg",
  //   "https://www.mrcrickethockey.com/wp-content/uploads/2022/11/GN-Legend-1.jpg",
  //   "https://dkpcricketonline.com/cdn/shop/collections/image_25acc302-a205-4fc9-8727-308c16a8a722_1200x630.heic?v=1673646548"

  // ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // drawer: const NavBar(),
      // appBar: AppBar(
      //   elevation: 0,
      //   systemOverlayStyle: SystemUiOverlayStyle.light,
      //   backgroundColor: const Color(0xff0095FF),
      //   title: const Text("Dashboard"),
      //   // leading: IconButton(
      //   //   onPressed: () {
      //   //     // open menu
      //   //   }, icon: const Icon(Icons.menu),
      //   // ),
        
      //   actions: [
      //     IconButton(
      //       onPressed: (){
      //         // do something
      //       }, 
      //       icon: const Icon(Icons.person)
      //       )
      //   ],
      // ),
      body: Column(
        children: [
          Image.network("https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg?t=st=1695210602~exp=1695211202~hmac=7ab68fa0c162961bd9948418d8494b4302156739d25c435acc52f25ef4847803",fit: BoxFit.cover),
          // Image.asset("https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg?t=st=1695210602~exp=1695211202~hmac=7ab68fa0c162961bd9948418d8494b4302156739d25c435acc52f25ef4847803"),

          // Carousel(autoScroll: true,items: [
          //   Image.network(scale: 1,"https://static.vecteezy.com/system/resources/thumbnails/001/849/423/small/fluid-abstract-blue-background-free-vector.jpg",fit: BoxFit.cover),
          //    Image.network(scale: 1,"https://static.vecteezy.com/system/resources/thumbnails/001/849/423/small/fluid-abstract-blue-background-free-vector.jpg",fit: BoxFit.cover)
          // ])
        ],
      )
    );
  }
}
