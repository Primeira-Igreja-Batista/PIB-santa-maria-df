if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("useCometNarrativeThreadPrivacyChangeStartCallback_narrativeThreadMetadata.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometNarrativeThreadPrivacyChangeStartCallback_narrativeThreadMetadata",selections:[{alias:null,args:null,concreteType:"NarrativeThread",kind:"LinkedField",name:"thread",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],type:"NarrativeThreadMetadata",abstractKey:null};e.exports=a}),null);
__d("CometFeedStoryPrivacySelectorStrategy_audience$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometFeedStoryPrivacySelectorStrategy_audience$normalization",selections:[{kind:"InlineFragment",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null}],type:"ICometStorySection",abstractKey:"__isICometStorySection"},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["PrivacyScopeEditableRenderer","PrivacyScopeUneditableRenderer"]}],concreteType:null,kind:"LinkedField",name:"privacy_scope_renderer",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorEditable_renderer$renderLocation",variableName:"privacySelectorRenderLocation"}],documentName:"CometPrivacySelectorForScope_scope",fragmentName:"CometPrivacySelectorEditable_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeEditableRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorUneditable_renderer$renderLocation",variableName:"privacySelectorRenderLocation"}],documentName:"CometPrivacySelectorForScope_scope",fragmentName:"CometPrivacySelectorUneditable_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeUneditableRenderer",abstractKey:null},b,{kind:"TypeDiscriminator",abstractKey:"__isPrivacySelectorRenderer"}],storageKey:'privacy_scope_renderer(supported:["PrivacyScopeEditableRenderer","PrivacyScopeUneditableRenderer"])'}],storageKey:null},{alias:null,args:null,concreteType:"NarrativeThreadMetadata",kind:"LinkedField",name:"narrative_thread_metadata",plural:!1,selections:[{alias:null,args:null,concreteType:"NarrativeThread",kind:"LinkedField",name:"thread",plural:!1,selections:[b],storageKey:null}],storageKey:null},b],storageKey:null}]}}();e.exports=a}),null);
__d("CometFeedStoryPrivacySelectorStrategy_audience.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"privacySelectorRenderLocation"}],kind:"Fragment",metadata:null,name:"CometFeedStoryPrivacySelectorStrategy_audience",selections:[{args:null,kind:"FragmentSpread",name:"useCometFeedStoryMatchDebugger_iCometStorySection"},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope",plural:!1,selections:[{args:[{kind:"Variable",name:"renderLocation",variableName:"privacySelectorRenderLocation"}],kind:"FragmentSpread",name:"CometPrivacySelectorForScope_scope"}],storageKey:null},{alias:null,args:null,concreteType:"NarrativeThreadMetadata",kind:"LinkedField",name:"narrative_thread_metadata",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useCometNarrativeThreadPrivacyChangeStartCallback_narrativeThreadMetadata"}],storageKey:null}],storageKey:null}],type:"CometFeedStoryPrivacySelectorStrategy",abstractKey:null};e.exports=a}),null);
__d("useCometNarrativeThreadPrivacyChangeStartCallback",["fbt","CometRelay","react","requireDeferred","useCometNarrativeThreadPrivacyChangeStartCallback_narrativeThreadMetadata.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react").useCallback,k=c("requireDeferred")("cometPushToast").__setRef("useCometNarrativeThreadPrivacyChangeStartCallback");function a(a){a=d("CometRelay").useFragment(i!==void 0?i:i=b("useCometNarrativeThreadPrivacyChangeStartCallback_narrativeThreadMetadata.graphql"),a);var c=a==null?void 0:(a=a.thread)==null?void 0:a.id;return j(function(){if(c!=null){var a=h._(/*FBT_CALL*/"A privacidade do seu t\u00f3pico foi editada."/*FBT_CALL*/);k.onReady(function(b){b.cometPushToast({message:a})})}},[c])}g["default"]=a}),98);
__d("CometFeedStoryPrivacySelectorStrategy.react",["CometFeedStoryMetaSectionMiddot.react","CometFeedStoryPrivacySelectorStrategy_audience.graphql","CometFeedStoryRenderLocationContext","CometPrivacySelectorForScope.react","CometRelay","react","useCometFeedStoryMatchDebugger","useCometNarrativeThreadPrivacyChangeStartCallback"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useContext;function a(a){var e,f=a.audience;a=a.privacySelectorRenderLocation;f=d("CometRelay").useFragment(h!==void 0?h:h=b("CometFeedStoryPrivacySelectorStrategy_audience.graphql"),f);var g=j(c("CometFeedStoryRenderLocationContext"));g=g.storyRenderLocation;c("useCometFeedStoryMatchDebugger")(f);e=c("useCometNarrativeThreadPrivacyChangeStartCallback")((e=f.story)==null?void 0:e.narrative_thread_metadata);return i.jsxs(i.Fragment,{children:[i.jsx(c("CometFeedStoryMetaSectionMiddot.react"),{}),i.jsx(c("CometPrivacySelectorForScope.react"),{onPrivacyChangeStart:e,renderLocation:(e=a)!=null?e:"COMET_STREAM",scope:f==null?void 0:(a=f.story)==null?void 0:a.privacy_scope,storyRenderLocation:g})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);