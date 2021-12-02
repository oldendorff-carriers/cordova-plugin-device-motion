/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */


var Acceleration = function(x, y, z, x_uc, y_uc, z_uc, x_ucb, y_ucb, z_ucb, x_la, y_la, z_la, x_rv, y_rv, z_rv, rv_cos, rv_eha, timestamp) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.x_uc = x_uc;
    this.y_uc = y_uc;
    this.z_uc = z_uc;
    this.x_ucb = x_ucb;
    this.y_ucb = y_ucb;
    this.z_ucb = z_ucb;
    this.x_la = x_la;
    this.y_la = y_la;
    this.z_la = z_la;
    this.x_rv = x_rv;
    this.y_rv = y_rv;
    this.z_rv = z_rv;
    this.rv_cos = rv_cos;
    this.rv_eha = rv_eha;
    this.timestamp = timestamp || (new Date()).getTime();
};

module.exports = Acceleration;
