import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent=require.context(
    '.',false,/_base-[\w-]+\.vue$/
)
requireComponent.keys().forEach(fileName => {
   const componentConfig=requireComponent(fileName)
   const componentName=upperFirst(
       camelCase(
           fileName.replace(/^\.\/_(.*)\.\w+$/,'$1')
       )
   )
   Vue.component(componentName,componentConfig.default||componentConfig)
});