import { Component, EventEmitter, Output } from '@angular/core';
import { GlobalNavigationService } from 'src/service/global-navigation.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SIDENAV_LIST } from '../shared/constants';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent {
  items: any[] = [];
  historyItems = [];
  searchListItems: any = [];
  isOpen: any;


  async ngOnInit() {
    this.items = [];
    this.getList();
  }

  /**
   * Get navigation list
   */
  getList = () => {
    setTimeout(() => {
      this.items = [
        {
          label: 'Products',
          items: [
            {
              app_url: 'ict.dev.us.ic.blackline.com',
              display_order: 2,
              is_internal_mdm: 'Y',
              label: 'Intercompany Trade',
              internal_mdm_url: 'test.com',
              created_by: 'mohammed.saif@blackline.com',
              module_id: 'ICT',
              updated_by: 'mohammed.saif@blackline.com',
              id: 5,
              created_date: '2024-02-29T07:24:21.703Z',
              updated_date: '2024-03-01T09:25:32.189563Z',
              nav_type: 'Products',
              mdm_url: null,
            },
            {
              app_url: 'icnt.dev.us.ic.blackline.com',
              display_order: 3,
              is_internal_mdm: 'Y',
              label: 'Intercompany Non Trade',
              internal_mdm_url: 'test.com',
              created_by: 'mohammed.saif@blackline.com',
              module_id: 'ICNT',
              updated_by: 'mohammed.saif@blackline.com',
              id: 7,
              created_date: '2024-02-29T07:24:21.703Z',
              updated_date: '2024-02-29T07:24:21.703Z',
              nav_type: 'Products',
              mdm_url: null,
            },
            {
              app_url: 'ifm.dev.us.ic.blackline.com',
              display_order: 4,
              is_internal_mdm: 'Y',
              label: 'Identity and Access Management',
              internal_mdm_url: 'test.com',
              created_by: 'mohammed.saif@blackline.com',
              module_id: 'IAM',
              updated_by: 'mohammed.saif@blackline.com',
              id: 8,
              created_date: '2024-02-29T07:24:21.703Z',
              updated_date: '2024-03-01T09:24:23.432305Z',
              nav_type: 'Products',
              mdm_url: null,
            },
            {
              app_url: 'ifm.dev.us.ic.blackline.com',
              display_order: 5,
              is_internal_mdm: 'Y',
              label: 'IFM',
              internal_mdm_url: 'test.com',
              created_by: 'mohammed.saif@blackline.com',
              module_id: 'IFM',
              updated_by: 'mohammed.saif@blackline.com',
              id: 10,
              created_date: '2024-02-29T07:24:21.703Z',
              updated_date: '2024-03-01T09:25:32.189563Z',
              nav_type: 'Products',
              mdm_url: null,
            },
            {
              app_url: 'icns.dev.us.ic.blackline.com',
              display_order: 6,
              is_internal_mdm: 'Y',
              label: 'Intercompany Net And Settle',
              internal_mdm_url: 'test.com',
              created_by: 'mohammed.saif@blackline.com',
              module_id: 'ICNS',
              updated_by: 'mohammed.saif@blackline.com',
              id: 11,
              created_date: '2024-02-29T07:24:21.703Z',
              updated_date: '2024-03-01T09:25:32.189563Z',
              nav_type: 'Products',
              mdm_url: null,
            },
            {
              app_url: 'vendor.dev.us.ic.blackline.com',
              display_order: 7,
              is_internal_mdm: 'Y',
              label: 'Vendor Invoice',
              internal_mdm_url: 'test.com',
              created_by: 'mohammed.saif@blackline.com',
              module_id: 'VI',
              updated_by: 'mohammed.saif@blackline.com',
              id: 12,
              created_date: '2024-02-29T07:24:21.703Z',
              updated_date: '2024-03-01T09:25:32.189563Z',
              nav_type: 'Products',
              mdm_url: null,
            },
            {
              app_url: 'allocation.dev.us.ic.blackline.com',
              display_order: 8,
              is_internal_mdm: 'Y',
              label: 'Allocation',
              internal_mdm_url: 'test.com',
              created_by: 'mohammed.saif@blackline.com',
              module_id: 'A',
              updated_by: 'mohammed.saif@blackline.com',
              id: 13,
              created_date: '2024-02-29T07:24:21.703Z',
              updated_date: '2024-03-01T09:25:32.189563Z',
              nav_type: 'Products',
              mdm_url: null,
            },
            {
              app_url: 'icbr.dev.us.ic.blackline.com',
              display_order: 9,
              is_internal_mdm: 'Y',
              label: 'Intercompany Balance And Resolve',
              internal_mdm_url: 'test.com',
              created_by: 'mohammed.saif@blackline.com',
              module_id: 'ICBR',
              updated_by: 'mohammed.saif@blackline.com',
              id: 14,
              created_date: '2024-02-29T07:24:21.703Z',
              updated_date: '2024-03-01T09:25:32.189563Z',
              nav_type: 'Products',
              mdm_url: null,
            },
          ],
          // "expanded": false
        },
        {
          label: 'Systems',
          items: [
            {
              app_url: 'mdm.dev.us.ic.blackline.com',
              display_order: 1,
              is_internal_mdm: 'Y',
              label: 'Master Data Management',
              internal_mdm_url: 'test.com',
              created_by: 'mohammed.saif@blackline.com',
              module_id: 'MDM',
              updated_by: 'mohammed.saif@blackline.com',
              id: 3,
              created_date: '2024-02-29T07:24:21.703409Z',
              updated_date: '2024-02-29T07:24:21.703409Z',
              nav_type: 'Systems',
              mdm_url: null,
            },
            {
              app_url: 'configuration.dev.us.ic.blackline.com',
              display_order: 10,
              is_internal_mdm: 'Y',
              label: 'Configuration',
              internal_mdm_url: 'test.com',
              created_by: 'mohammed.saif@blackline.com',
              module_id: 'CONF',
              updated_by: 'mohammed.saif@blackline.com',
              id: 15,
              created_date: '2024-02-29T07:24:21.703409Z',
              updated_date: '2024-02-29T07:24:21.703409Z',
              nav_type: 'Systems',
              mdm_url: null,
            },
            {
              app_url: 'rulesengine.dev.us.ic.blackline.com',
              display_order: 11,
              is_internal_mdm: 'Y',
              label: 'Rules Engine',
              internal_mdm_url: 'test.com',
              created_by: 'mohammed.saif@blackline.com',
              module_id: 'RE',
              updated_by: 'mohammed.saif@blackline.com',
              id: 16,
              created_date: '2024-02-29T07:24:21.703409Z',
              updated_date: '2024-02-29T07:24:21.703409Z',
              nav_type: 'Systems',
              mdm_url: null,
            },
            {
              app_url: 'reports.dev.us.ic.blackline.com',
              display_order: 12,
              is_internal_mdm: 'Y',
              label: 'Reports',
              internal_mdm_url: 'test.com',
              created_by: 'mohammed.saif@blackline.com',
              module_id: 'R',
              updated_by: 'mohammed.saif@blackline.com',
              id: 17,
              created_date: '2024-02-29T07:24:21.703409Z',
              updated_date: '2024-02-29T07:24:21.703409Z',
              nav_type: 'Systems',
              mdm_url: null,
            },
            {
              app_url: 'extracts.dev.us.ic.blackline.com',
              display_order: 13,
              is_internal_mdm: 'Y',
              label: 'Extracts',
              internal_mdm_url: 'test.com',
              created_by: 'mohammed.saif@blackline.com',
              module_id: 'E',
              updated_by: 'mohammed.saif@blackline.com',
              id: 18,
              created_date: '2024-02-29T07:24:21.703409Z',
              updated_date: '2024-02-29T07:24:21.703409Z',
              nav_type: 'Systems',
              mdm_url: null,
            },
          ],
        },
      ];
    }, 1000);
  };

  /**
   * searched navigation lsit
   * @param searchVal 
   */
  onEnterSearchInput(searchVal: any) {
    console.log(searchVal);

    // call list api and set items in same format
  }

  /**
   * onclick application from the list
   * @param val 
   */
  onClickNavigationItem = (val: any) => {
    console.log(val);
  };
}
