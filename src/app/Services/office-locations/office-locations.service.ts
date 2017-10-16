import {
  Injectable
} from '@angular/core';

@Injectable()
export class OfficeLocationsService {
  cities = {
    Atlanta$Georgia: {
      0: {
        coords: [33.918938, -84.355897],
        address: '990 Hammond Dr. Suite 930 Atlanta, Georgia 30328',
        phone: '(404) 459-2300',
        speciality: ['T']
      },
      1: {
        coords: [33.813568, -84.431901],
        address: '2135 Defoor Hills Rd., Suite N Atlanta, Georgia 30318',
        phone: '404-459-2275',
        speciality: ['G']
      }
    },
    Austin$Texas: {
      0: {
        coords: [30.392188, -97.848898],
        address: '6500 River Place Blvd. Suite 202 Austin, Texas 78730',
        phone: '(512) 231-3600',
        speciality: ['T']
      },
      1: {
        coords: [30.213371, -97.751961],
        address: '1701 Directors Blvd. Suite 820 Austin, Texas 78744',
        phone: '(512) 447-0100',
        speciality: ['G']
      }
    },
    Baltimore$Maryland: {
      0: {
        coords: [39.208148, -76.688157],
        address: '1306 Concourse Dr. Suite 205 Linthicum, Maryland 21090',
        phone: '(410) 454-1500',
        speciality: ['FA', 'T']
      }
    },
    Boston$Massachusetts: {
      0: {
        coords: [42.353570, -71.053981],
        address: '600 Atlantic Ave. 18th Floor Boston, Massachusetts 02210',
        phone: '(617) 368-6600',
        speciality: ['FA', 'T']
      }
    },
    Burlington$Massachusetts: {
      0: {
        coords: [42.529321, -71.219708],
        address: '200 Summit Dr. Suite 320 Burlington, Massachusetts 01803',
        phone: '781-359-1700',
        speciality: ['FA', 'T']
      }
    },
    Charlotte$North_Carolina: {
      0: {
        coords: [35.227306, -80.843944],
        address: '121 W. Trade St. Suite 1900 Charlotte, North Carolina 28202',
        phone: '(704) 612-2800',
        speciality: ['T']
      }
    },
    Chicago$Illinois: {
      0: {
        coords: [41.879752, -87.636408],
        address: '125 South Wacker Dr. Suite 820 Chicago, Illinois 60606',
        phone: '(312) 917-2275',
        speciality: ['FA', 'T']
      }
    },
    Cincinnati$Ohio: {
      0: {
        coords: [39.103830, -84.520573],
        address: '895 Central Ave. Suite 835 Cincinnati, Ohio 45202',
        phone: '(513)-333-3400',
        speciality: ['FA']
      }
    },
    Cleveland$Ohio: {
      0: {
        coords: [41.397113, -81.656265],
        address: '3 Summit Park Dr. Suite 550 Independence, Ohio 44131',
        phone: '(216) 643-8100',
        speciality: ['T']
      }
    },
    Columbus$Ohio: {
      0: {
        coords: [40.095864, -83.127045],
        address: '400 Metro Place North Suite 350 Dublin, Ohio 43017',
        phone: '614-776-3200',
        speciality: ['T']
      }
    },
    Culver_City$California: {
      0: {
        coords: [33.987665, -118.383347],
        address: '200 Corporate Pointe Suite 460 and 480 Culver City, California 90230',
        phone: '424-243-2000',
        speciality: ['FA', 'T']
      }
    },
    Dallas$Texas: {
      0: {
        coords: [32.957912, -96.822921],
        address: '15301 North Dallas Pkwy. Suite 800 Addison, Texas 75001',
        phone: '(972) 383-6100',
        speciality: ['FA', 'T']
      }
    },
    Denver$Colorado: {
      0: {
        coords: [39.620573, -104.890770],
        address: '5680 Greenwood Plaza Blvd. Suite 320 Greenwood Village, Colorado 80111',
        phone: '(303) 773-3700',
        speciality: ['FA', 'T']
      }
    },
    Detroit$Michigan: {
      0: {
        coords: [39.620573, -104.890770],
        address: '20700 Civic Center Dr. Suite 170 Southfield, Michigan 48076',
        phone: '(248) 351-3800',
        speciality: ['FA', 'T']
      }
    },
    Fairfax$Virginia: {
      0: {
        coords: [38.880725, -77.233258],
        address: '2677 Prosperity Ave. Suite 100 & 280 Fairfax, Virginia 22031',
        phone: '(703) 245-7350',
        speciality: ['G']
      }
    },
    Fort_Lauderdale$Florida: {
      0: {
        coords: [26.141480, -80.342130],
        address: '1551 Sawgrass Corporate Pkwy Suite 430 Sunrise, Florida 33323',
        phone: '(954) 928-0800',
        speciality: ['FA', 'T']
      }
    },
    Fort_Worth$Texas: {
      0: {
        coords: [32.750463, -97.334544],
        address: '801 Cherry St. Suite 225 Fort Worth, Texas 76102',
        phone: '(817) 334-2400',
        speciality: ['FA', 'T']
      }
    },
    Glendale$California: {
      0: {
        coords: [34.153444, -118.254664],
        address: '500 N. Brand Blvd. Suite 800 Glendale, California 91203',
        phone: '(616) 632-2300',
        speciality: ['FA', 'T']
      }
    },
    Grand_Rapids$Michigan: {
      0: {
        coords: [42.961875, -85.673309],
        address: '44 Grandville Ave. Suite 250 Grand Rapids, Michigan 49503',
        phone: '(616) 632-2300',
        speciality: ['FA', 'T']
      }
    },
    Hartford$Connecticut: {
      0: {
        coords: [41.763697, -72.661387],
        address: '111 Founders Plaza Suite 1501 East Hartford, Connecticut 06108',
        phone: '(860) 291-6800',
        speciality: ['FA', 'T']
      }
    },
    Houston$Texas: {
      0: {
        coords: [29.733658, -95.548512],
        address: '2929 Briarpark Dr. Suite 125 Houston, Texas 77042',
        phone: '(713) 479-3500',
        speciality: ['FA', 'T']
      }
    },
    Indianapolis$Indiana: {
      0: {
        coords: [39.767123, -86.160242],
        address: '115 West Washington St. Suite 1190 Indianapolis, Indiana 46204',
        phone: '(317) 656-2700',
        speciality: ['FA', 'T']
      }
    },
    Costa_Mesa$California: {
      0: {
        coords: [33.684957, -117.884617],
        address: '3090 Bristol St. Suite 300 Costa Mesa, California 92626',
        phone: '(949) 223-1400',
        speciality: ['FA', 'T']
      }
    },
    Kansas_City$Kansas: {
      0: {
        coords: [38.926181, -94.668788],
        address: '7101 College Blvd. Suite 750 Overland Park, Kansas 66210',
        phone: '(913) 890-5000',
        speciality: ['FA', 'T']
      }
    },
    Louisville$Kentucky: {
      0: {
        coords: [38.262413, -85.568223],
        address: '10200 Forest Green Blvd. Suite 304 Louisville, Kentucky 40223',
        phone: '(502) 339-2900',
        speciality: ['FA', 'T']
      }
    },
    Madison$Wisconsin: {
      0: {
        coords: [43.134765, -89.290637],
        address: '2810 Crossroads Dr. Suite 1000 Madison, Wisconsin 53718',
        phone: '(608) 242-2050',
        speciality: ['T']
      }
    },
    Doral$Florida: {
      0: {
        coords: [25.807207, -80.330062],
        address: '3470 NW 82nd Ave. Suite 710 Doral, Florida 33122',
        phone: '(786) 329-4310',
        speciality: []
      }
    },
    Milwaukee$Wisconsin: {
      0: {
        coords: [43.029428, -88.023416],
        address: '135 South 84th St. Suite 150 Milwaukee, Wisconsin 53214',
        phone: '(414) 454-2000',
        speciality: ['FA', 'T']
      }
    },
    Minneapolis$Minnesota: {
      0: {
        coords: [44.861115, -93.331257],
        address: '7760 France Ave. South Suite 660 Minneapolis, Minnesota 55435',
        phone: '(952) 392-2500',
        speciality: ['FA', 'T']
      }
    },
    New_York_City$New_York: {
      0: {
        coords: [40.750072, -73.992235],
        address: '2 Penn Plaza, 24th Floor New York City, New York 10121',
        phone: '(212) 973-2000',
        speciality: ['FA', 'T']
      }
    },
    Orlando_Florida: {
      0: {
        coords: [28.441752, -81.420973],
        address: '8427 South Park Circle Suite 160 Orlando, Florida 32819',
        phone: '(407) 667-4000',
        speciality: ['FA', 'T']
      }
    },
    Parsippany$New_Jersey: {
      0: {
        coords: [40.846451, -74.463568],
        address: '4 Campus Drive Suite 304 Parsippany, New Jersey 07054',
        phone: '(973) 401-2200',
        speciality: ['FA', 'T']
      }
    },
    King_of_Prussia$Pennsylvania: {
      0: {
        coords: [40.077584, -75.365873],
        address: '455 South Gulph Rd. Suite 415 King of Prussia, Pennsylvania 19406',
        phone: '(610) 995-4200',
        speciality: ['FA', 'T']
      }
    },
    Philadelphia$Pennsylvania: {
      0: {
        coords: [39.953575, -75.170384],
        address: '1801 Market St. Suite 1560 Philadelphia, Pennsylvania 19103',
        phone: '(215) 971-1400',
        speciality: ['FA', 'T']
      }
    },
    Phoenix$Arizona: {
      0: {
        coords: [33.509617, -112.013841],
        address: '3131 E. Camelback Rd. Suite 235, 240, 245 and 250 Phoenix, Arizona 85016',
        phone: '(602) 776-1100',
        speciality: ['FA', 'T']
      }
    },
    Pittsburgh$Pennsylvania: {
      0: {
        coords: [40.424337, -80.041793],
        address: '875 Greentree Rd. Suite 760 Pittsburgh, Pennsylvania 15220',
        phone: '(412) 278-2800',
        speciality: ['FA', 'T']
      }
    },
    Portland$Oregon: {
      0: {
        coords: [45.444950, -122.773549],
        address: '10260 SW Greenburg Rd. Suite 380 Portland, Oregon 97223',
        phone: '(503) 768-3700',
        speciality: ['FA', 'T']
      }
    },
    Providence$Rhode_Island: {
      0: {
        coords: [41.828534, -71.419330],
        address: '235 Promenade St. Suite 505 Providence, Rhode Island 02908',
        phone: '(401) 278-4800',
        speciality: ['FA']
      }
    },
    Morrisville$North_Carolina: {
      0: {
        coords: [35.875951, -78.863931],
        address: '430 Davis Dr. Suite 130 Morrisville, North Carolina 27560',
        phone: '(919) 794-5600',
        speciality: ['T']
      }
    },
    Reston$Virginia: {
      0: {
        coords: [38.954469, -77.357433],
        address: '12011 Sunset Hills Rd. Suite 450 Reston, Virginia 20190',
        phone: '(703) 342-3100',
        speciality: ['FA', 'T']
      }
    },
    Salt_Lake_City$Utah: {
      0: {
        coords: [40.630717, -111.870725],
        address: '756 E. Winchester St. Suite 301 Murray, Utah 84107',
        phone: '(801) 257-6800',
        speciality: ['T']
      }
    },
    San_Antonio$Texas: {
      0: {
        coords: [29.527638, -98.484833],
        address: '9601 McAllister Freeway Suite 913 San Antonio, Texas 78216',
        phone: '(210) 384-7900',
        speciality: ['FA', 'T']
      },
      1: {
        coords: [29.537419, -98.488433],
        address: '506 Sandau Rd. Suite 250 San Antonio, Texas 78216',
        phone: '(210) 497-7744',
        speciality: ['G']
      }
    },
    San_Diego$California: {
      0: {
        coords: [32.873551, -117.215001],
        address: '4275 Executive Square Suite 250 La Jolla, California 92037',
        phone: '(858) 550-1600',
        speciality: ['FA', 'T']
      }
    },
    San_Franciso$California: {
      0: {
        coords: [37.790755, -122.402030],
        address: '180 Montgomery St. Suite 1860 San Francisco, California 94104',
        phone: '(415) 228-4500',
        speciality: ['FA', 'T']
      }
    },
    San_Jose$California: {
      0: {
        coords: [37.293042, -121.934310],
        address: '910 E. Hamilton Ave., Suite 550 Campbell, California 95008',
        phone: '(408) 487-2800',
        speciality: ['FA', 'T']
      }
    },
    San_Ramon$California: {
      0: {
        coords: [37.772885, -121.959465],
        address: '12647 Alcosta Blvd. Suite 250 San Ramon, California 94583',
        phone: '925-394-2100',
        speciality: ['T']
      }
    },
    Schaumburg$Illinois: {
      0: {
        coords: [42.049746, -87.999484],
        address: '1701 East Golf Road Suite 604 (Tower III) Rolling Meadows, Illinois 60008',
        phone: '(847) 330-4000',
        speciality: ['FA', 'T']
      }
    },
    Seatle$Washington: {
      0: {
        coords: [27.961510, -82.449364],
        address: '1120 112th Ave., NE Suite 450 Bellevue, Washington 98004',
        phone: '(425) 803-7100',
        speciality: ['T']
      }
    },
    St_Louis$Missouri: {
      0: {
        coords: [38.641015, -90.500307],
        address: '530 Maryville Centre Dr. Suite 110 St. Louis, Missouri 63141',
        phone: '(314) 212-8700',
        speciality: ['FA', 'T']
      }
    },
    Shelton$Connecticut: {
      0: {
        coords: [41.277031, -73.130900],
        address: '3 Corporate Dr. Suite 214 Shelton, Connecticut 06484',
        phone: '(203) 225-1700',
        speciality: ['T']
      }
    },
    Stamford$Connecticut: {
      0: {
        coords: [41.054630, -73.542696],
        address: '1055 Washington Blvd. 4th Floor Stamford, Connecticut 06901',
        phone: '(203) 504-7400',
        speciality: ['FA', 'T']
      }
    },
    Tampa$Florida: {
      0: {
        coords: [27.962151, -82.449277],
        address: '1001 East Palm Ave. Tampa, Florida 33605',
        phone: ' (813) 552-5000',
        speciality: ['FA', 'T']
      }
    },
    Washington$DC: {
      0: {
        coords: [38.903320, -77.039348],
        address: '1025 Connecticut Ave., N.W. Suite 415 Washington, DC 20036',
        phone: '202-499-2200',
        speciality: ['FA']
      }
    },
    Westborough$Massachusetts: {
      0: {
        coords: [42.283612, -71.573289],
        address: '1500 West Park Dr. Suite 240 Westborough, Massachusetts 01581',
        phone: '(508) 703-3000',
        speciality: ['FA']
      }
    },
    Woodland_Hills$California: {
      0: {
        coords: [34.184205, -118.603114],
        address: '6303 Owensmouth Ave. Suite 1033 Woodland Hills, California 91367',
        phone: ' (818) 808-1500',
        speciality: ['FA', 'T']
      }
    }
  }
}
