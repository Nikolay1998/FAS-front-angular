import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NodeService } from '../_services/node.service.js';
import { FinancialNode } from '../_models/financial.node.js';
import { AuthenticationService } from '../_services/authentication.service.js';

@Component({
  selector: 'app-node-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './node-list.component.html',
  styleUrl: './node-list.component.css'
})

export class NodeListComponent implements OnInit {
  nodes: FinancialNode[] = [];

  constructor(
    private nodeService: NodeService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    // this.authenticationService.login("xyz", "xyz").subscribe();
    this.getNodes();
  }

  getNodes() {
    this.nodeService.getNodes().subscribe(nodes => this.nodes = nodes)
  }
  
}