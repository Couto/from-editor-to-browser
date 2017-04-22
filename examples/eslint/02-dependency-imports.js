import Vue from 'vue';
import { awesome } from './mocks/AwesomeModule';
import { module } from './mocks/NonExistentModule';


console.log(awesome(), module());
