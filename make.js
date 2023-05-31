const fs = require("fs");

const defines =[
    {
        "Name": "Abarth_500_Assetto_Corse",
        "SK": "SkeletalMesh'/Game/models/Abarth_500_Assetto_Corse/Abarth_500_Assetto_Corse_SK.Abarth_500_Assetto_Corse_SK'",
        "Skins": [],
        "Brand": "Abarth",
        "MaxSpeed": 220,
        "Weight": 1005,
        "MaxTorque": 300
    },
    {
        "Name": "Alfa_Romeo_155_V6",
        "SK": "SkeletalMesh'/Game/models/Alfa_Romeo_155_V6/Alfa_Romeo_155_V6_SK.Alfa_Romeo_155_V6_SK'",
        "Skins": [],
        "Brand": "Alfa_Romeo",
        "MaxSpeed": 240,
        "Weight": 1275,
        "MaxTorque": 187
    },
    {
        "Name": "Alfa_Romeo_4C",
        "SK": "SkeletalMesh'/Game/models/Alfa_Romeo_4C/Alfa_Romeo_4C_SK.Alfa_Romeo_4C_SK'",
        "Skins": [],
        "Brand": "Alfa_Romeo",
        "MaxSpeed": 258,
        "Weight": 1025,
        "MaxTorque": 350
    },
    {
        "Name": "Alfa_Romeo_Mito_QV",
        "SK": "SkeletalMesh'/Game/models/Alfa_Romeo_Mito_QV/Alfa_Romeo_Mito_QV_SK.Alfa_Romeo_Mito_QV_SK'",
        "Skins": [],
        "Brand": "Alfa_Romeo",
        "MaxSpeed": 219,
        "Weight": 1195,
        "MaxTorque": 230
    },
    {
        "Name": "Audi_R18_etron_quattro",
        "SK": "SkeletalMesh'/Game/models/Audi_R18_etron_quattro/Audi_R18_etron_quattro_SK.Audi_R18_etron_quattro_SK'",
        "Skins": [],
        "Brand": "Audi",
        "MaxSpeed": 340,
        "Weight": 1360,
        "MaxTorque": 600
    },
    {
        "Name": "Audi_R8_LMS_2016",
        "SK": "SkeletalMesh'/Game/models/Audi_R8_LMS_2016/Audi_R8_LMS_2016_SK.Audi_R8_LMS_2016_SK'",
        "Skins": [],
        "Brand": "Audi",
        "MaxSpeed": 305,
        "Weight": 1225,
        "MaxTorque": 550
    },
    {
        "Name": "Audi_R8_LMS_ULTRA",
        "SK": "SkeletalMesh'/Game/models/Audi_R8_LMS_ULTRA/Audi_R8_LMS_ULTRA_SK.Audi_R8_LMS_ULTRA_SK'",
        "Skins": [
            {
                "Name": "00",
                "Items": [
                    {
                        "Slot": 11,
                        "Material": "Material'/Game/models/Audi_R8_LMS_ULTRA/skins/2015_C_Abt_Racing_1/2015_C_Abt_Racing_1.2015_C_Abt_Racing_1'"
                    },
                    {
                        "Slot": 12,
                        "Material": "Material'/Game/models/Audi_R8_LMS_ULTRA/skins/2015_C_Abt_Racing_1/2015_C_Abt_Racing_1.2015_C_Abt_Racing_1'"
                    },
                    {
                        "Slot": 13,
                        "Material": "Material'/Game/models/Audi_R8_LMS_ULTRA/skins/2015_C_Abt_Racing_1/2015_C_Abt_Racing_1.2015_C_Abt_Racing_1'"
                    },
                    {
                        "Slot": 14,
                        "Material": "Material'/Game/models/Audi_R8_LMS_ULTRA/skins/2015_C_Abt_Racing_1/2015_C_Abt_Racing_1_EXT_Details.2015_C_Abt_Racing_1_EXT_Details'"
                    },
                    {
                        "Slot": 19,
                        "Material": "Material'/Game/models/Audi_R8_LMS_ULTRA/skins/2015_C_Abt_Racing_1/2015_C_Abt_Racing_1_EXT_Details.2015_C_Abt_Racing_1_EXT_Details'"
                    }
                ]
            },
            {
                "Name": "01",
                "Items": [
                    {
                        "Slot": 13,
                        "Material": "Material'/Game/models/Audi_R8_LMS_ULTRA/skins/2015_C_Abt_Racing_3/2015_C_Abt_Racing_3.2015_C_Abt_Racing_3'"
                    },
                    {
                        "Slot": 12,
                        "Material": "Material'/Game/models/Audi_R8_LMS_ULTRA/skins/2015_C_Abt_Racing_3/2015_C_Abt_Racing_3.2015_C_Abt_Racing_3'"
                    },
                    {
                        "Slot": 11,
                        "Material": "Material'/Game/models/Audi_R8_LMS_ULTRA/skins/2015_C_Abt_Racing_3/2015_C_Abt_Racing_3.2015_C_Abt_Racing_3'"
                    }
                ]
            },
            {
                "Name": "",
                "Items": [
                    {
                        "Slot": 32,
                        "Material": "Material'/Game/models/Audi_R8_LMS_ULTRA/skins/2015_WRT_1/2015_WRT_1.2015_WRT_1'"
                    }
                ]
            }
        ],
        "Brand": "Audi",
        "MaxSpeed": 305,
        "Weight": 1230,
        "MaxTorque": 550
    },
    {
        "Name": "Audi_S1",
        "SK": "SkeletalMesh'/Game/models/Audi_S1/Audi_S1_SK.Audi_S1_SK'",
        "Skins": [],
        "Brand": "Audi",
        "MaxSpeed": 250,
        "Weight": 1415,
        "MaxTorque": 370
    },
    {
        "Name": "Audi_Sport_Quattro",
        "SK": "SkeletalMesh'/Game/models/Audi_Sport_Quattro/Audi_Sport_Quattro_SK.Audi_Sport_Quattro_SK'",
        "Skins": [],
        "Brand": "Audi",
        "MaxSpeed": 250,
        "Weight": 1440,
        "MaxTorque": 350
    },
    {
        "Name": "Audi_TT_Cup",
        "SK": "SkeletalMesh'/Game/models/Audi_TT_Cup/Audi_TT_Cup_SK.Audi_TT_Cup_SK'",
        "Skins": [],
        "Brand": "Audi",
        "MaxSpeed": 215,
        "Weight": 1125,
        "MaxTorque": 340
    },
    {
        "Name": "Audi_TT_RS_VLN",
        "SK": "SkeletalMesh'/Game/models/Audi_TT_RS_VLN/Audi_TT_RS_VLN_SK.Audi_TT_RS_VLN_SK'",
        "Skins": [],
        "Brand": "Audi",
        "MaxSpeed": 280,
        "Weight": 2579,
        "MaxTorque": 600
    },
    {
        "Name": "BMW_M4",
        "SK": "SkeletalMesh'/Game/models/BMW_M4/BMW_M4_SK.BMW_M4_SK'",
        "Skins": [],
        "Brand": "BMW",
        "MaxSpeed": 250,
        "Weight": 1570,
        "MaxTorque": 550
    },
    {
        "Name": "BMW_M4_AKRAPOVIC",
        "SK": "SkeletalMesh'/Game/models/BMW_M4_AKRAPOVIC/BMW_M4_AKRAPOVIC_SK.BMW_M4_AKRAPOVIC_SK'",
        "Skins": [],
        "Brand": "BMW",
        "MaxSpeed": 280,
        "Weight": 1585,
        "MaxTorque": 550
    },
    {
        "Name": "Chevrolet_Corvette_C7R",
        "SK": "SkeletalMesh'/Game/models/Chevrolet_Corvette_C7R/Chevrolet_Corvette_C7R_SK.Chevrolet_Corvette_C7R_SK'",
        "Skins": [],
        "Brand": "Chevrolet_Corvette",
        "MaxSpeed": 290,
        "Weight": 1245,
        "MaxTorque": 610
    },
    {
        "Name": "Ferrari_250_GTO",
        "SK": "SkeletalMesh'/Game/models/Ferrari_250_GTO/Ferrari_250_GTO_SK.Ferrari_250_GTO_SK'",
        "Skins": [],
        "Brand": "Ferrari",
        "MaxSpeed": 280,
        "Weight": 1000,
        "MaxTorque": 294
    },
    {
        "Name": "Ferrari_288_GTO",
        "SK": "SkeletalMesh'/Game/models/Ferrari_288_GTO/Ferrari_288_GTO_SK.Ferrari_288_GTO_SK'",
        "Skins": [],
        "Brand": "Ferrari",
        "MaxSpeed": 305,
        "Weight": 1185,
        "MaxTorque": 496
    },
    {
        "Name": "Ferrari_312_67",
        "SK": "SkeletalMesh'/Game/models/Ferrari_312_67/Ferrari_312_67_SK.Ferrari_312_67_SK'",
        "Skins": [],
        "Brand": "Ferrari",
        "MaxSpeed": 330,
        "Weight": 540,
        "MaxTorque": 215
    },
    {
        "Name": "Ferrari_330_P4",
        "SK": "SkeletalMesh'/Game/models/Ferrari_330_P4/Ferrari_330_P4_SK.Ferrari_330_P4_SK'",
        "Skins": [],
        "Brand": "Ferrari",
        "MaxSpeed": 320,
        "Weight": 792,
        "MaxTorque": 451
    },
    {
        "Name": "Ferrari_488_GT3",
        "SK": "SkeletalMesh'/Game/models/Ferrari_488_GT3/Ferrari_488_GT3_SK.Ferrari_488_GT3_SK'",
        "Skins": [],
        "Brand": "Ferrari",
        "MaxSpeed": 280,
        "Weight": 1245,
        "MaxTorque": 550
    },
    {
        "Name": "Ferrari_488_GTB",
        "SK": "SkeletalMesh'/Game/models/Ferrari_488_GTB/Ferrari_488_GTB_SK.Ferrari_488_GTB_SK'",
        "Skins": [],
        "Brand": "Ferrari",
        "MaxSpeed": 330,
        "Weight": 1370,
        "MaxTorque": 760
    },
    {
        "Name": "Ferrari_812_Superfast",
        "SK": "SkeletalMesh'/Game/models/Ferrari_812_Superfast/Ferrari_812_Superfast_SK.Ferrari_812_Superfast_SK'",
        "Skins": [],
        "Brand": "Ferrari",
        "MaxSpeed": 340,
        "Weight": 1635,
        "MaxTorque": 718
    },
    {
        "Name": "Ferrari_FXX_K",
        "SK": "SkeletalMesh'/Game/models/Ferrari_FXX_K/Ferrari_FXX_K_SK.Ferrari_FXX_K_SK'",
        "Skins": [],
        "Brand": "Ferrari",
        "MaxSpeed": 350,
        "Weight": 1155,
        "MaxTorque": 750
    },
    {
        "Name": "Ferrari_LaFerrari",
        "SK": "SkeletalMesh'/Game/models/Ferrari_LaFerrari/Ferrari_LaFerrari_SK.Ferrari_LaFerrari_SK'",
        "Skins": [],
        "Brand": "Ferrari",
        "MaxSpeed": 350,
        "Weight": 1225,
        "MaxTorque": 900
    },
    {
        "Name": "Ford_Escort_MK1",
        "SK": "SkeletalMesh'/Game/models/Ford_Escort_MK1/Ford_Escort_MK1_SK.Ford_Escort_MK1_SK'",
        "Skins": [],
        "Brand": "Ford",
        "MaxSpeed": 130,
        "Weight": 910,
        "MaxTorque": 90
    },
    {
        "Name": "Ford_GT_MK1",
        "SK": "SkeletalMesh'/Game/models/Ford_GT_MK1/Ford_GT_MK1_SK.Ford_GT_MK1_SK'",
        "Skins": [],
        "Brand": "Ford",
        "MaxSpeed": 330,
        "Weight": 1270,
        "MaxTorque": 435
    },
    {
        "Name": "Ford_Mustang_GT",
        "SK": "SkeletalMesh'/Game/models/Ford_Mustang_GT/Ford_Mustang_GT_SK.Ford_Mustang_GT_SK'",
        "Skins": [],
        "Brand": "Ford",
        "MaxSpeed": 249,
        "Weight": 1725,
        "MaxTorque": 530
    },
    {
        "Name": "Lamborghini_Aventador_SV",
        "SK": "SkeletalMesh'/Game/models/Lamborghini_Aventador_SV/Lamborghini_Aventador_SV_SK.Lamborghini_Aventador_SV_SK'",
        "Skins": [],
        "Brand": "Lamborghini",
        "MaxSpeed": 349,
        "Weight": 1575,
        "MaxTorque": 690
    },
    {
        "Name": "Lamborghini_Countach_QV5000",
        "SK": "SkeletalMesh'/Game/models/Lamborghini_Countach_QV5000/Lamborghini_Countach_QV5000_SK.Lamborghini_Countach_QV5000_SK'",
        "Skins": [],
        "Brand": "Lamborghini",
        "MaxSpeed": 295,
        "Weight": 1470,
        "MaxTorque": 500
    },
    {
        "Name": "Lamborghini_Gallardo_SL",
        "SK": "SkeletalMesh'/Game/models/Lamborghini_Gallardo_SL/Lamborghini_Gallardo_SL_SK.Lamborghini_Gallardo_SL_SK'",
        "Skins": [],
        "Brand": "Lamborghini",
        "MaxSpeed": 325,
        "Weight": 1410,
        "MaxTorque": 540
    },
    {
        "Name": "Lamborghini_Huracan_GT3",
        "SK": "SkeletalMesh'/Game/models/Lamborghini_Huracan_GT3/Lamborghini_Huracan_GT3_SK.Lamborghini_Huracan_GT3_SK'",
        "Skins": [],
        "Brand": "Lamborghini",
        "MaxSpeed": 320,
        "Weight": 1230,
        "MaxTorque": 570
    },
    {
        "Name": "Lamborghini_Huracan_Performante",
        "SK": "SkeletalMesh'/Game/models/Lamborghini_Huracan_Performante/Lamborghini_Huracan_Performante_SK.Lamborghini_Huracan_Performante_SK'",
        "Skins": [],
        "Brand": "Lamborghini",
        "MaxSpeed": 325,
        "Weight": 1382,
        "MaxTorque": 600
    },
    {
        "Name": "Lamborghini_Huracan_STO",
        "SK": "SkeletalMesh'/Game/models/Lamborghini_Huracan_ST/Lamborghini_Huracan_ST_SK.Lamborghini_Huracan_ST_SK'",
        "Skins": [],
        "Brand": "Lamborghini",
        "MaxSpeed": 310,
        "Weight": 1339,
        "MaxTorque": 565
    },
    {
        "Name": "Lamborghini_Miura_SV",
        "SK": "SkeletalMesh'/Game/models/Lamborghini_Miura_SV/Lamborghini_Miura_SV_SK.Lamborghini_Miura_SV_SK'",
        "Skins": [],
        "Brand": "Lamborghini",
        "MaxSpeed": 290,
        "Weight": 1300,
        "MaxTorque": 365
    },
    {
        "Name": "Lotus_25_SK",
        "SK": "SkeletalMesh'/Game/models/Lotus_25/Lotus_25_SK.Lotus_25_SK'",
        "Skins": [],
        "Brand": "Lotus",
        "MaxSpeed": 240,
        "Weight": 450,
        "MaxTorque": 243
    },
    {
        "Name": "Lotus_3_eleven",
        "SK": "SkeletalMesh'/Game/models/Lotus_3_eleven/Lotus_3_eleven_SK.Lotus_3_eleven_SK'",
        "Skins": [],
        "Brand": "Lotus",
        "MaxSpeed": 280,
        "Weight": 925,
        "MaxTorque": 450
    },
    {
        "Name": "Lotus_72D",
        "SK": "SkeletalMesh'/Game/models/Lotus_72D/Lotus_72D_SK.Lotus_72D_SK'",
        "Skins": [],
        "Brand": "Lotus",
        "MaxSpeed": 294,
        "Weight": 550,
        "MaxTorque": 240
    },
    {
        "Name": "Maserati_250F",
        "SK": "SkeletalMesh'/Game/models/Maserati_250F/Maserati_250F_SK.Maserati_250F_SK'",
        "Skins": [],
        "Brand": "Maserati",
        "MaxSpeed": 250,
        "Weight": 630,
        "MaxTorque": 280
    },
    {
        "Name": "Maserati_Alfieri",
        "SK": "SkeletalMesh'/Game/models/Maserati_Alfieri/Maserati_Alfieri_SK.Maserati_Alfieri_SK'",
        "Skins": [],
        "Brand": "Maserati",
        "MaxSpeed": 320,
        "Weight": 1500,
        "MaxTorque": 520
    },
    {
        "Name": "Maserati_Levante",
        "SK": "SkeletalMesh'/Game/models/Maserati_Levante/Maserati_Levante_SK.Maserati_Levante_SK'",
        "Skins": [],
        "Brand": "Maserati",
        "MaxSpeed": 301,
        "Weight": 1960,
        "MaxTorque": 730
    },
    {
        "Name": "Maserati_MC12_GT1",
        "SK": "SkeletalMesh'/Game/models/Maserati_MC12_GT1/Maserati_MC12_GT1_SK.Maserati_MC12_GT1_SK'",
        "Skins": [],
        "Brand": "Maserati",
        "MaxSpeed": 330,
        "Weight": 1200,
        "MaxTorque": 740
    },
    {
        "Name": "Mazda_MX5_CUP",
        "SK": "SkeletalMesh'/Game/models/Mazda_MX5_CUP/Mazda_MX5_CUP_SK.Mazda_MX5_CUP_SK'",
        "Skins": [],
        "Brand": "Mazda",
        "MaxSpeed": 220,
        "Weight": 1085,
        "MaxTorque": 193
    },
    {
        "Name": "Mazda_MX5_NA",
        "SK": "SkeletalMesh'/Game/models/Mazda_MX5_NA/Mazda_MX5_NA_SK.Mazda_MX5_NA_SK'",
        "Skins": [],
        "Brand": "Mazda",
        "MaxSpeed": 200,
        "Weight": 940,
        "MaxTorque": 136
    },
    {
        "Name": "Mazda_RX7_Spirit_R",
        "SK": "SkeletalMesh'/Game/models/Mazda_RX7_Spirit_R/Mazda_RX7_Spirit_R_SK.Mazda_RX7_Spirit_R_SK'",
        "Skins": [],
        "Brand": "Mazda",
        "MaxSpeed": 250,
        "Weight": 1300,
        "MaxTorque": 294
    },
    {
        "Name": "Mazda_RX7_Tuned",
        "SK": "SkeletalMesh'/Game/models/Mazda_RX7_Tuned/Mazda_RX7_Tuned_SK.Mazda_RX7_Tuned_SK'",
        "Skins": [],
        "Brand": "Mazda",
        "MaxSpeed": 290,
        "Weight": 1250,
        "MaxTorque": 490
    },
    {
        "Name": "McLaren_570S",
        "SK": "SkeletalMesh'/Game/models/McLaren_570S/McLaren_570S_SK.McLaren_570S_SK'",
        "Skins": [],
        "Brand": "McLaren",
        "MaxSpeed": 328,
        "Weight": 1313,
        "MaxTorque": 600
    },
    {
        "Name": "McLaren_650_GT3",
        "SK": "SkeletalMesh'/Game/models/McLaren_650_GT3/McLaren_650_GT3_SK.McLaren_650_GT3_SK'",
        "Skins": [],
        "Brand": "McLaren",
        "MaxSpeed": 310,
        "Weight": 1240,
        "MaxTorque": 650
    },
    {
        "Name": "McLaren_F1_GTR",
        "SK": "SkeletalMesh'/Game/models/McLaren_F1_GTR/McLaren_F1_GTR_SK.McLaren_F1_GTR_SK'",
        "Skins": [],
        "Brand": "McLaren",
        "MaxSpeed": 370,
        "Weight": 1000,
        "MaxTorque": 651
    },
    {
        "Name": "McLaren_P1",
        "SK": "SkeletalMesh'/Game/models/McLaren_P1/McLaren_P1_SK.McLaren_P1_SK'",
        "Skins": [],
        "Brand": "McLaren",
        "MaxSpeed": 350,
        "Weight": 1490,
        "MaxTorque": 900
    },
    {
        "Name": "McLaren_P1_GTR",
        "SK": "SkeletalMesh'/Game/models/McLaren_P1_GTR/McLaren_P1_GTR_SK.McLaren_P1_GTR_SK'",
        "Skins": [],
        "Brand": "McLaren",
        "MaxSpeed": 340,
        "Weight": 1400,
        "MaxTorque": 800
    },
    {
        "Name": "Mercedes_AMG_GT3",
        "SK": "SkeletalMesh'/Game/models/Mercedes_AMG_GT3/Mercedes_AMG_GT3_SK.Mercedes_AMG_GT3_SK'",
        "Skins": [],
        "Brand": "Mercedes",
        "MaxSpeed": 290,
        "Weight": 1300,
        "MaxTorque": 650
    },
    {
        "Name": "Mercedes_Benz_190_EVO2",
        "SK": "SkeletalMesh'/Game/models/Mercedes_Benz_190_EVO2/Mercedes_Benz_190_EVO2_SK.Mercedes_Benz_190_EVO2_SK'",
        "Skins": [],
        "Brand": "Mercedes",
        "MaxSpeed": 235,
        "Weight": 1260,
        "MaxTorque": 235
    },
    {
        "Name": "Mercedes_C9",
        "SK": "SkeletalMesh'/Game/models/Mercedes_C9/Mercedes_C9_SK.Mercedes_C9_SK'",
        "Skins": [],
        "Brand": "Mercedes",
        "MaxSpeed": 400,
        "Weight": 900,
        "MaxTorque": 720
    },
    {
        "Name": "Nissan_370Z_NISMO",
        "SK": "SkeletalMesh'/Game/models/Nissan_370Z_NISMO/Nissan_370Z_NISMO_SK.Nissan_370Z_NISMO_SK'",
        "Skins": [],
        "Brand": "Nissan",
        "MaxSpeed": 290,
        "Weight": 1530,
        "MaxTorque": 374
    },
    {
        "Name": "Nissan_GTR_GT3_SK",
        "SK": "SkeletalMesh'/Game/models/Nissan_GTR_GT3_SK/Nissan_GTR_GT3_SK.Nissan_GTR_GT3_SK'",
        "Skins": [],
        "Brand": "Nissan",
        "MaxSpeed": 300,
        "Weight": 1300,
        "MaxTorque": 550
    },
    {
        "Name": "Nissan_GTR_Nismo",
        "SK": "SkeletalMesh'/Game/models/Nissan_GTR_Nismo/Nissan_GTR_Nismo_SK.Nissan_GTR_Nismo_SK'",
        "Skins": [],
        "Brand": "Nissan",
        "MaxSpeed": 315,
        "Weight": 1740,
        "MaxTorque": 652
    },
    {
        "Name": "Nissan_Skyline_R34",
        "SK": "SkeletalMesh'/Game/models/Nissan_Skyline_R34/Nissan_Skyline_R34_SK.Nissan_Skyline_R34_SK'",
        "Skins": [],
        "Brand": "Nissan",
        "MaxSpeed": 250,
        "Weight": 1540,
        "MaxTorque": 373
    },
    {
        "Name": "Pagani_Huayra_BC",
        "SK": "SkeletalMesh'/Game/models/Pagani_Huayra_BC/Pagani_Huayra_BC_SK.Pagani_Huayra_BC_SK'",
        "Skins": [],
        "Brand": "Pagani",
        "MaxSpeed": 370,
        "Weight": 1200,
        "MaxTorque": 1100
    },
    {
        "Name": "Porsche_908_LH",
        "SK": "SkeletalMesh'/Game/models/Porsche_908_LH/Porsche_908_LH_SK.Porsche_908_LH_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 320,
        "Weight": 650,
        "MaxTorque": 620
    },
    {
        "Name": "Porsche_911_GT1",
        "SK": "SkeletalMesh'/Game/models/Porsche_911_GT1/Porsche_911_GT1_SK.Porsche_911_GT1_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 3008,
        "Weight": 1150,
        "MaxTorque": 600
    },
    {
        "Name": "Porsche_911_GT3_CUP",
        "SK": "SkeletalMesh'/Game/models/Porsche_911_GT3_CUP/Porsche_911_GT3_CUP_2017_SK.Porsche_911_GT3_CUP_2017_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 259,
        "Weight": 1200,
        "MaxTorque": 480
    },
    {
        "Name": "Porsche_911_GT3_R",
        "SK": "SkeletalMesh'/Game/models/Porsche_911_GT3_R/Porsche_911_GT3_R_2016_SK.Porsche_911_GT3_R_2016_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 294,
        "Weight": 1230,
        "MaxTorque": 550
    },
    {
        "Name": "Porsche_911_R",
        "SK": "SkeletalMesh'/Game/models/Porsche_911_R/Porsche_911_R_SK.Porsche_911_R_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 323,
        "Weight": 1370,
        "MaxTorque": 460
    },
    {
        "Name": "Porsche_911_RSR_2017",
        "SK": "SkeletalMesh'/Game/models/Porsche_911_RSR_2017/Porsche_911_RSR_2017_SK.Porsche_911_RSR_2017_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 308,
        "Weight": 1245,
        "MaxTorque": 470
    },
    {
        "Name": "Porsche_917_30_SK",
        "SK": "SkeletalMesh'/Game/models/Porsche_917_30/Porsche_917_30_SK.Porsche_917_30_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 386,
        "Weight": 800,
        "MaxTorque": 900
    },
    {
        "Name": "Porsche_917_K",
        "SK": "SkeletalMesh'/Game/models/Porsche_917_K/Porsche_917_K_SK.Porsche_917_K_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 360,
        "Weight": 800,
        "MaxTorque": 580
    },
    {
        "Name": "Porsche_918_Spyder",
        "SK": "SkeletalMesh'/Game/models/Porsche_918_Spyder/Porsche_918_Spyder_SK.Porsche_918_Spyder_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 340,
        "Weight": 1634,
        "MaxTorque": 750
    },
    {
        "Name": "Porsche_919_Hybrid_2015",
        "SK": "SkeletalMesh'/Game/models/Porsche_919_Hybrid_2015/Porsche_919_Hybrid_2015_SK.Porsche_919_Hybrid_2015_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 340,
        "Weight": 875,
        "MaxTorque": 800
    },
    {
        "Name": "Porsche_935_78_Moby_Dick",
        "SK": "SkeletalMesh'/Game/models/Porsche_935_78_Moby_Dick/Porsche_935_78_Moby_Dick_SK.Porsche_935_78_Moby_Dick_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 366,
        "Weight": 935,
        "MaxTorque": 657
    },
    {
        "Name": "Porsche_962c_Longtail",
        "SK": "SkeletalMesh'/Game/models/Porsche_962c_Longtail/Porsche_962c_Longtail_SK.Porsche_962c_Longtail_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 350,
        "Weight": 840,
        "MaxTorque": 850
    },
    {
        "Name": "Porsche_962c_Shorttail",
        "SK": "SkeletalMesh'/Game/models/Porsche_962c_Shorttail/Porsche_962c_Shorttail_SK.Porsche_962c_Shorttail_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 350,
        "Weight": 830,
        "MaxTorque": 850
    },
    {
        "Name": "Porsche_991_Carrera_S",
        "SK": "SkeletalMesh'/Game/models/Porsche_991_Carrera_S/Porsche_991_Carrera_S_SK.Porsche_991_Carrera_S_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 307,
        "Weight": 1425,
        "MaxTorque": 500
    },
    {
        "Name": "Porsche_991_Turbo_S",
        "SK": "SkeletalMesh'/Game/models/Porsche_991_Turbo_S/Porsche_991_Turbo_S_SK.Porsche_991_Turbo_S_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 330,
        "Weight": 1640,
        "MaxTorque": 750
    },
    {
        "Name": "Porsche_Cayenne_Turbo_S",
        "SK": "SkeletalMesh'/Game/models/Porsche_Cayenne_Turbo_S/Porsche_Cayenne_Turbo_S_SK.Porsche_Cayenne_Turbo_S_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 284,
        "Weight": 2310,
        "MaxTorque": 800
    },
    {
        "Name": "Porsche_Cayman_GT4_Clubsport",
        "SK": "SkeletalMesh'/Game/models/Porsche_Cayman_GT4_Clubsport/Porsche_Cayman_GT4_Clubsport_SK.Porsche_Cayman_GT4_Clubsport_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 295,
        "Weight": 1180,
        "MaxTorque": 380
    },
    {
        "Name": "Porsche_Cayman_GT4_STD",
        "SK": "SkeletalMesh'/Game/models/Porsche_Cayman_GT4_STD/Porsche_Cayman_GT4_STD_SK.Porsche_Cayman_GT4_STD_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 295,
        "Weight": 1340,
        "MaxTorque": 420
    },
    {
        "Name": "Porsche_Macan_Turbo",
        "SK": "SkeletalMesh'/Game/models/Porsche_Macan_Turbo/Porsche_Macan_Turbo_SK.Porsche_Macan_Turbo_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 266,
        "Weight": 1925,
        "MaxTorque": 550
    },
    {
        "Name": "Porsche_Panamera_Turbo_2017",
        "SK": "SkeletalMesh'/Game/models/Porsche_Panamera_Turbo_2017/Porsche_Panamera_Turbo_2017_SK.Porsche_Panamera_Turbo_2017_SK'",
        "Skins": [],
        "Brand": "Porsche",
        "MaxSpeed": 306,
        "Weight": 1995,
        "MaxTorque": 770
    },
    {
        "Name": "Praga_R1",
        "SK": "SkeletalMesh'/Game/models/Praga_R1/PRAGA_R1_SK.PRAGA_R1_SK'",
        "Skins": [],
        "Brand": "Praga",
        "MaxSpeed": 264,
        "Weight": 590,
        "MaxTorque": 450
    },
    {
        "Name": "RUF_RT12_R_RWD",
        "SK": "SkeletalMesh'/Game/models/RUF_RT12_R_RWD/RUF_RT12_R_RWD_SK.RUF_RT12_R_RWD_SK'",
        "Skins": [],
        "Brand": "RUF",
        "MaxSpeed": 370,
        "Weight": 1450,
        "MaxTorque": 880
    },
    {
        "Name": "RUF_Yellowbird",
        "SK": "SkeletalMesh'/Game/models/RUF_Yellowbird/RUF_Yellowbird_SK.RUF_Yellowbird_SK'",
        "Skins": [],
        "Brand": "RUF",
        "MaxSpeed": 342,
        "Weight": 1280,
        "MaxTorque": 485
    },
    {
        "Name": "Scuderia_Glickenhaus_SCG003",
        "SK": "SkeletalMesh'/Game/models/Scuderia_Glickenhaus_SCG003/Scuderia_Glickenhaus_SCG003_SK.Scuderia_Glickenhaus_SCG003_SK'",
        "Skins": [],
        "Brand": "Scuderia",
        "MaxSpeed": 354,
        "Weight": 1350,
        "MaxTorque": 800
    },
    {
        "Name": "Toyota_AE86",
        "SK": "SkeletalMesh'/Game/models/Toyota_AE86/Toyota_AE86_SK.Toyota_AE86_SK'",
        "Skins": [],
        "Brand": "Toyota",
        "MaxSpeed": 201,
        "Weight": 950,
        "MaxTorque": 150
    },
    {
        "Name": "Toyota_AE86_Drift_Version",
        "SK": "SkeletalMesh'/Game/models/Toyota_AE86_Drift_Version/Toyota_AE86_Drift_Version_SK.Toyota_AE86_Drift_Version_SK'",
        "Skins": [],
        "Brand": "Toyota",
        "MaxSpeed": 200,
        "Weight": 1100,
        "MaxTorque": 162
    },
    {
        "Name": "Toyota_AE86_Tuned",
        "SK": "SkeletalMesh'/Game/models/Toyota_AE86_Tuned/Toyota_AE86_Tuned_SK.Toyota_AE86_Tuned_SK'",
        "Skins": [],
        "Brand": "Toyota",
        "MaxSpeed": 220,
        "Weight": 1150,
        "MaxTorque": 180
    },
    {
        "Name": "Toyota_Celica_ST185",
        "SK": "SkeletalMesh'/Game/models/Toyota_Celica_ST185/Toyota_Celica_ST185_SK.Toyota_Celica_ST185_SK'",
        "Skins": [],
        "Brand": "Toyota",
        "MaxSpeed": 240,
        "Weight": 1400,
        "MaxTorque": 287
    },
    {
        "Name": "Toyota_GT86",
        "SK": "SkeletalMesh'/Game/models/Toyota_GT86/Toyota_GT86_SK.Toyota_GT86_SK'",
        "Skins": [],
        "Brand": "Toyota",
        "MaxSpeed": 225,
        "Weight": 1270,
        "MaxTorque": 205
    },
    {
        "Name": "Toyota_Supra_mk_IV_Drift",
        "SK": "SkeletalMesh'/Game/models/Toyota_Supra_mk_IV_Drift/Toyota_Supra_mk_IV_Drift_SK.Toyota_Supra_mk_IV_Drift_SK'",
        "Skins": [],
        "Brand": "Toyota",
        "MaxSpeed": 250,
        "Weight": 1590,
        "MaxTorque": 484
    },
    {
        "Name": "Toyota_Supra_mk_IV_Tuned",
        "SK": "SkeletalMesh'/Game/models/Toyota_Supra_mk_IV_Tuned/Toyota_Supra_mk_IV_Tuned_SK.Toyota_Supra_mk_IV_Tuned_SK'",
        "Skins": [],
        "Brand": "Toyota",
        "MaxSpeed": 280,
        "Weight": 1650,
        "MaxTorque": 520
    },
    {
        "Name": "Toyota_TS040",
        "SK": "SkeletalMesh'/Game/models/Toyota_TS040/Toyota_TS040_SK.Toyota_TS040_SK'",
        "Skins": [],
        "Brand": "Toyota",
        "MaxSpeed": 350,
        "Weight": 875,
        "MaxTorque": 1200
    }
]
const template = {
    "name": "HTML5 Shiv",
    "image": "https://hxfjsw.github.io/GtVerseMetadata/images/test.jpg",
    "animation_url": "https://hxfjsw.github.io/GtVerseMetadata/video/test.mp4",
    "attributes": [
        {
            "trait_type": "MaxSpeed",
            "value": "220 km/h"
        },
        {
            "trait_type": "MaxTorque",
            "value": "320 Nm"
        },
        {
            "trait_type": "Weight",
            "value": "1,415 kg"
        },
        {
            "trait_type": "Brand",
            "value": "BMW"
        }
    ]
}

function deep_copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

for (let i = 0; i < 100; i++) {
    let metadata = deep_copy(template);
    const define = defines[i % defines.length];
    metadata.name = "#" + i +" " + define.Name.replaceAll('_', ' ');
    console.log(metadata);
    metadata.attributes[0].value = define.MaxSpeed + " km/h";
    metadata.attributes[1].value = define.MaxTorque + " nm";
    metadata.attributes[2].value = define.Weight + " kg";
    metadata.attributes[3].value = define.Brand;

    //todo 写入到文件
    fs.writeFileSync("./docs/json/" + i + ".json", JSON.stringify(metadata));
}

