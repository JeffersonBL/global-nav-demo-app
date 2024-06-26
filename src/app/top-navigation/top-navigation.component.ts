import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { GlobalNavigationService } from 'src/service/global-navigation.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {
  userDetailsLoad: boolean = true;
  userListItems: any[] | undefined;

  tenants: any[] = [];
  roles: any[] = [];

  defaultSelections: {};

  breadcrumbLoad: boolean = true;
  breadcrumbItems: any[];
  dataLoad: boolean = true;

  productItems: any[] = [];
  tableItems: any[] = [];
  selectedItems: any[] = [];
  dropdownName: any[] = [];

  ngOnInit() {
    // user List
    this.userListItems = [
      {
        name: 'Jefferson E',
        role: 'Blackline Admin',
        application: 'MDM',
        email: 'Jefferson.e@blackline.com',
        lastLogin: '01/01/2024',
        buildNumber: 'V01.1.1',
      },
    ];
    // tenant  List
    this.tenants = [{ name: 'DEV-01' }, { name: 'DEV-02' }];
    // role list
    this.roles = [{ name: 'Blackline Admin' }, { name: 'Tax Reviewer' }];
    // default tenant & role selection
    this.defaultSelections = {
      tenant: this.tenants[0]['name'],
      role: this.roles[0]['name'],
    };
    // breadcrumb list
    this.breadcrumbItems = [
      { label: 'Master Data Management', route: '' },
      { label: 'Legal Entity', route: '' },
    ];

    // product List for dropdown
    this.productItems = [
      {
        "name": "ICCS",
        "config_url": "test.com"
      }
    ];

    // table list for dropdown
    this.tableItems = [
      {
        "name": "Legal Entity",
        "config_url": "legal_entity"
      },
      {
        "name": "Tax",
        "config_url": "tax"
      },
      {
        "name": "Customs",
        "config_url": "customs"
      },
      {
        "name": "UOM",
        "config_url": "uom"
      },
      {
        "name": "Customs Map",
        "config_url": "customs_map"
      },
      {
        "name": "Unspsc",
        "config_url": "unspsc"
      },
      {
        "name": "Jurisdiction",
        "config_url": "jurisdiction"
      },
      {
        "name": "Incoterm",
        "config_url": "incoterm"
      },
      {
        "name": "Uom Conversion",
        "config_url": "uom_conversion"
      },
      {
        "name": "Tax Map",
        "config_url": "tax_map"
      },
      {
        "name": "Hs",
        "config_url": "hs"
      },
      {
        "name": "Currency",
        "config_url": "currency"
      },
      {
        "name": "Shipping Location",
        "config_url": "shipping_location"
      },
      {
        "name": "Country",
        "config_url": "country"
      },
      {
        "name": "Eccn test",
        "config_url": "eccn"
      },
      {
        "name": "Transfer Pricing",
        "config_url": "transfer_pricing"
      },
      {
        "name": "Shipping Location Map",
        "config_url": "shipping_location_map"
      },
      {
        "name": "Product",
        "config_url": "product"
      },
      {
        "name": "Import",
        "config_url": "job"
      },
      {
        "name": "Global Nav",
        "config_url": "global_nav"
      },
      {
        "name": "Global Nav Config",
        "config_url": "global_nav_config"
      }
    ];


    // selected dropdowns
    this.selectedItems = [
      {
        "product": {
          "name": "ICCS",
          "config_url": "test.com"
        },
        "table": {
          "name": "Legal Entity",
          "config_url": "legal_entity"
        }
      }
    ];

    // dropdown names
    this.dropdownName = [
      {
        "selectOne": "Products",
        "selectTwo": "ICCS"
      }
    ]


    this.userDetailsLoad = false;
    this.breadcrumbLoad = false;
    this.dataLoad = false
  };


  /**
   * on tenant change
   * @param selectedTenant 
   */
  onChangeTenant = (selectedTenant: any) => {
    console.log(selectedTenant);

  };

  /**
   * on role change
   * @param selectedRole 
   */
  onChangeRole = (selectedRole: any) => {
    console.log(selectedRole);
  };

  // on click breadcrumb
  onClickBreadcrumbItem = (selected: any) => {
    console.log(selected);
  }

  /**
   * on select product from dropdown
   * @param selected 
   */
  onSelectProduct = (selected: any) => {

  }

  /**
   * on select table from dropdown
   * @param selected 
   */
  onSelectTable = (selected: any) => {

  }

  /**
   * logout
   */
  logout = () => {
    console.log('Logout');

  };
}