'use strict';

import { ApiInfo } from './ApiInfo/api-info';
import { ApiLogo } from './ApiLogo/api-logo';
import { JsonSchema } from './JsonSchema/json-schema';
import { JsonSchemaLazy } from './JsonSchema/json-schema-lazy';
import { ParamsList } from './ParamsList/params-list';
import { RequestSamples } from './RequestSamples/request-samples';
import { ResponsesList } from './ResponsesList/responses-list';
import { ResponsesSamples } from './ResponsesSamples/responses-samples';
import { SchemaSample } from './SchemaSample/schema-sample';
import { SideMenu } from './SideMenu/side-menu';
import { MethodsList } from './MethodsList/methods-list';
import { Method } from './Method/method';
import { Warnings } from './Warnings/warnings';

import { Redoc } from './Redoc/redoc';

export const REDOC_DIRECTIVES = [
  ApiInfo, ApiLogo, JsonSchema, JsonSchemaLazy, ParamsList, RequestSamples, ResponsesList,
  ResponsesSamples, SchemaSample, SideMenu, MethodsList, Method, Warnings, Redoc
];

export { ApiInfo, ApiLogo, JsonSchema, JsonSchemaLazy, ParamsList, RequestSamples, ResponsesList,
ResponsesSamples, SchemaSample, SideMenu, MethodsList, Method, Warnings, Redoc }
