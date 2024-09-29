
jQuery(document).ready(function () {

   jQuery("#gallery_1").nanogallery2( {
       thumbnailHeight:  300,
       thumbnailWidth:   'auto',
       thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,
       itemsBaseURL:     './assets/images/story/',
       thumbnailLabel: { display: false },
       thumbnailHoverEffect2:      'scale120',
       // ### gallery content ### 
       items: [
           { src: 'marmot_sit_2.jpeg', srct: 'thumbnails/marmot_sit_2.jpeg', title: 'Kings Canyon' },
           { src: 'ghost_town.jpg', srct: 'thumbnails/ghost_town.jpg', title: 'A Ghost Town' },
           { src: 'jtree_laugh.jpeg', srct: 'thumbnails/jtree_laugh.jpeg', title: 'Joshua Tree' },
         ]
     });

   jQuery("#gallery_2").nanogallery2( {
    thumbnailHeight:  300,
    thumbnailWidth:   'auto',
    thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,
    thumbnailLabel: { display: false },
    itemsBaseURL:     './assets/images/story/',

    thumbnailHoverEffect2:      'scale120',
    // ### gallery content ### 
    items: [
        { src: 'amy_clomp.jpg', srct: 'thumbnails/amy_clomp.jpg'},
        { src: 'ryan-dyno.jpeg', srct: 'thumbnails/ryan-dyno.jpeg'},
        { src: 'amy-clomp-2.jpeg', srct: 'thumbnails/amy-clomp-2.jpeg'},

        { src: 'ryan-clomp-cropped.jpeg', srct: 'thumbnails/ryan-clomp-cropped.jpeg'},
      ]
  });

   jQuery("#gallery_3").nanogallery2( {
       // ### gallery settings ### 
       thumbnailHeight:  243 * 3,
       thumbnailWidth:   324 * 3,
       thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,
       itemsBaseURL:     './assets/images/story/',
       thumbnailHoverEffect2:      'scale120',

       // ### gallery content ### 
       items: [
            { src: 'mt_tam.jpeg', srct: 'thumbnails/mt_tam.jpeg', title: 'First known photo of the couple' },
         ]
     });

   jQuery("#gallery_4").nanogallery2( {
       // ### gallery settings ### 
       thumbnailHeight:  300,
       thumbnailWidth:   'auto',
       thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,
       itemsBaseURL:     './assets/images/story/',
       thumbnailHoverEffect2:      'scale120',
       
       // ### gallery content ### 
       items: [
        { src: 'elcap1.jpeg', srct: 'thumbnails/elcap1.jpeg'},
        { src: 'elcap2.jpeg', srct: 'thumbnails/elcap2.jpeg'},
        { src: 'elcap3.jpeg', srct: 'thumbnails/elcap3.jpeg'},
        { src: 'elcap4.jpeg', srct: 'thumbnails/elcap4.jpeg'},
      ]
     });

   jQuery("#gallery_5").nanogallery2( {
       // ### gallery settings ### 
       thumbnailHeight:  300,
       thumbnailWidth:   'auto',
       thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,
       thumbnailLabel: { display: false },
       itemsBaseURL:     './assets/images/story/',
       thumbnailHoverEffect2:      'scale120',
       
       // ### gallery content ### 
       items: [
           { src: 'desolation.jpg', srct: 'thumbnails/desolation.jpg', title: 'Desolation Wilderness' },
           { src: 'subdome.jpg', srct: 'thumbnails/subdome.jpg', title: 'Subdome' },
           { src: 'half_dome_1.jpg', srct: 'thumbnails/half_dome_1.jpg', title: 'Half Dome' },
           { src: 'jtree_1.jpeg', srct: 'thumbnails/jtree_1.jpeg', title: 'Joshua Tree' },
           { src: 'jtree2.jpg', srct: 'thumbnails/jtree2.jpg', title: 'Joshua Tree' },
           { src: 'lava_tube.jpg', srct: 'thumbnails/lava_tube.jpg', title: 'Lava Tubes' },
           { src: 'kelso_dunes.jpeg', srct: 'thumbnails/kelso_dunes.jpeg', title: 'Kelso Dunes' },
           { src: 'vernal_falls.jpg', srct: 'thumbnails/vernal_falls.jpg', title: 'Vernal Falls' },
           { src: 'j_tree_3.jpg', srct: 'thumbnails/j_tree_3.jpg', title: 'Joshua Tree' },
           { src: 'budd_creek.jpg', srct: 'thumbnails/budd_creek.jpg', title: 'Budd Creek' },
           { src: 'lost_coast_2.jpg', srct: 'thumbnails/lost_coast_2.jpg', title: 'Lost Coast Trail' },
           { src: 'half_dome_returns.jpg', srct: 'thumbnails/half_dome_returns.jpg', title: 'Half Dome' },
           { src: 'ski_1.jpeg', srct: 'thumbnails/ski_1.jpeg', title: 'Skiing' },
         ]
     });

   jQuery("#gallery_6").nanogallery2( {
       // ### gallery settings ### 
       thumbnailHeight:  300,
       thumbnailWidth:   'auto',
       thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,
       itemsBaseURL:     './assets/images/story/',
       thumbnailLabel: { display: false },
       thumbnailHoverEffect2:      'scale120',
       
       // ### gallery content ### 
       items: [
           { src: 'lost_coast_beach.jpg', srct: 'thumbnails/lost_coast_beach.jpg', title: 'Lost Coast Trail' },
           { src: 'anza_stacked.jpg', srct: 'thumbnails/anza_stacked.jpg', title: 'Anza Borrego' },
           { src: 'burney_falls.jpg', srct: 'thumbnails/burney_falls.jpg', title: 'Burney Falls' },
           { src: 'shasta.jpg', srct: 'thumbnails/shasta.jpg', title: 'Mt. Shasta' },
           { src: 'crater_lake.jpg', srct: 'thumbnails/crater_lake.jpg', title: 'Crater Lake' },
           { src: 'golden_gate_1.jpg', srct: 'thumbnails/golden_gate_1.jpg', title: 'Golden Gate' },
         ]
     });
 
    jQuery("#gallery_7").nanogallery2( {
        // ### gallery settings ### 
        thumbnailHeight:  300,
        thumbnailWidth:   'auto',
        thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,
        itemsBaseURL:     './assets/images/story/',
        thumbnailHoverEffect2:      'scale120',
        
        // ### gallery content ### 
        items: [
            { src: 'clouds_rest_hike_1.jpeg', srct: 'thumbnails/clouds_rest_hike_1.jpeg', title: '' },
            { src: 'clouds_rest_hike_2.jpeg', srct: 'thumbnails/clouds_rest_hike_2.jpeg', title: '' },
            { src: 'clouds_rest_hike_0.jpeg', srct: 'thumbnails/clouds_rest_hike_0.jpeg', title: '' },
          ]
      });
 
    jQuery("#gallery_8").nanogallery2( {
        // ### gallery settings ### 
        thumbnailHeight:  300,
        thumbnailWidth:   360,
        thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,
        thumbnailLabel: { display: false },
        itemsBaseURL:     './assets/images/story/',
        thumbnailHoverEffect2:      'scale120',
        // ### gallery content ### 
        items: [
            { src: 'proposal_1.jpeg', srct: 'thumbnails/proposal_1.jpeg', title: '' },
            { src: 'proposal_4.jpeg', srct: 'thumbnails/proposal_4.jpeg', title: '' },
            { src: 'proposal_5.jpeg', srct: 'thumbnails/proposal_5.jpeg', title: '' },
            { src: 'proposal_6.jpg', srct: 'thumbnails/proposal_6.jpg', title: '' },
          ],
        galleryMosaic :   [
            { "c": 1, "r": 1, "w": 1, "h": 2 },
            { "c": 2, "r": 1, "w": 1, "h": 1 },
            { "c": 2, "r": 2, "w": 1, "h": 1 },
            { "c": 3, "r": 1, "w": 1, "h": 2 },
        ]
        
      });

    jQuery("#gallery_9").nanogallery2( {
        // ### gallery settings ### 
        thumbnailHeight:  960 / 1.5,
        thumbnailWidth:   1280 / 1.5,
        thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,
        itemsBaseURL:     './assets/images/story/',
        thumbnailLabel: { display: false },
        thumbnailHoverEffect2:      'scale120',
        // ### gallery content ### 
        items: [
            { src: 'desert_kish.jpeg', srct: 'thumbnails/desert_kish_thumb.jpeg', title: 'Mesquite Dunes in Death Valley' },
          ]
      });

 });
