if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CometStickerRelay_sticker.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Variable",name:"height",variableName:"height"},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Variable",name:"width",variableName:"width"}],b={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null};return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"height"},{defaultValue:null,kind:"LocalArgument",name:"scale"},{defaultValue:null,kind:"LocalArgument",name:"width"}],kind:"Fragment",metadata:null,name:"CometStickerRelay_sticker",selections:[{alias:null,args:null,kind:"ScalarField",name:"frame_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"frame_rate",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"frames_per_column",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"frames_per_row",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:null,concreteType:"StickerPack",kind:"LinkedField",name:"pack",plural:!1,selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},action:"LOG",path:"pack.name"}],storageKey:null},{alias:null,args:a,concreteType:"Image",kind:"LinkedField",name:"sprite_image",plural:!1,selections:[{kind:"RequiredField",field:b,action:"LOG",path:"sprite_image.uri"}],storageKey:null},{alias:null,args:a,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{kind:"RequiredField",field:b,action:"LOG",path:"image.uri"},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null}],storageKey:null}],type:"Sticker",abstractKey:null}}();e.exports=a}),null);
__d("CometUFICommentStickerAttachmentStyle_styleTypeRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b=[{kind:"Literal",name:"height",value:80},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:80}],c={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},d=[a];return{kind:"SplitOperation",metadata:{},name:"CometUFICommentStickerAttachmentStyle_styleTypeRenderer$normalization",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"frame_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"frame_rate",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"frames_per_column",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"frames_per_row",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:null,concreteType:"StickerPack",kind:"LinkedField",name:"pack",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},a],storageKey:null},{alias:null,args:b,concreteType:"Image",kind:"LinkedField",name:"sprite_image",plural:!1,selections:[c],storageKey:null},{alias:null,args:b,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null}],storageKey:null}],type:"Sticker",abstractKey:null},{kind:"InlineFragment",selections:d,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:d,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:d,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:d,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometUFICommentStickerAttachmentStyle_styleTypeRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometUFICommentStickerAttachmentStyle_styleTypeRenderer",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{args:[{kind:"Literal",name:"height",value:80},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:80}],kind:"FragmentSpread",name:"CometStickerRelay_sticker"}],storageKey:null}],storageKey:null}],type:"StoryAttachmentStickerStyleRenderer",abstractKey:null};e.exports=a}),null);
__d("CometSpriteBase.react",["BaseImage.react","CometPressable.react","react","useMergeRefs"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={innerSprite:{animationDelay:"iiswpqb6",animationFillMode:"j1l0snac",animationIterationCount:"ee40wjg4",animationPlayState:"lw6bsss4",animationTimingFunction:"ijsdnhzc",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},spriteButton:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",":active":{transform:"tm8avpzi"}}};function a(a){var b=a.accessibilityCaption,d=a.animationStyle,e=a.containerRef,f=a.cursorEnabled;f=f===void 0?!1:f;var g=a.imgHeight,j=a.imgRef,k=a.imgWidth,l=a.linkProps,m=a.onHoverIn,n=a.onPress,o=a.overlayEnabled;o=o===void 0?!1:o;var p=a.pressableRef,q=a.showFocusOverlay;q=q===void 0?!1:q;var r=a.showHoverOverlay;r=r===void 0?!1:r;var s=a.src,t=a.style;a=a.xstyle;p=c("useMergeRefs")(p,e);return h.jsx(c("CometPressable.react"),{cursorDisabled:!f,hideFocusOverlay:!q,hideHoverOverlay:!r,label:b,linkProps:l,onHoverIn:m,onPress:n,overlayDisabled:!o,overlayRadius:4,ref:p,style:t,xstyle:[i.spriteButton,a],children:function(a){var e=a.overlay;return h.jsxs(h.Fragment,{children:[h.jsx(c("BaseImage.react"),{alt:b,draggable:!1,height:"100%",ref:j,src:s,style:babelHelpers["extends"]({height:g,width:k},d==null?void 0:d(a)),width:"100%",xstyle:i.innerSprite}),e]})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("cometAnimationStateReducer",[],(function(a,b,c,d,e,f){"use strict";function g(){return Object.freeze({hasAnimated:!1,iterationIndex:1,shouldAnimate:!1})}function h(a,b){switch(b.type){case"FORCE_STOP_ANIMATION":return l(a,b);case"RESTART_ANIMATION":return j(a,b);case"START_ANIMATION":return i(a,b);case"NEXT_ITERATION":return k(a,b);default:b.type;break}return a}function i(a,b){b=a.hasAnimated;return b?h(a,{type:"RESTART_ANIMATION"}):babelHelpers["extends"]({},a,{shouldAnimate:!0})}function j(a,b){b=h(a,{type:"FORCE_STOP_ANIMATION"});return babelHelpers["extends"]({},b,{shouldAnimate:!0})}function k(a,b){b=b.iterationLimit;var c=a.iterationIndex;b=c>=b;return babelHelpers["extends"]({},a,{hasAnimated:b,iterationIndex:b?1:c+1})}function l(a,b){return babelHelpers["extends"]({},a,g(),{shouldAnimate:!1})}f.getInitialState=g;f.reducer=h}),66);
__d("useCometAnimationStateReducer",["cometAnimationStateReducer","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useMemo,i=b.useReducer;function a(a){var b=a.frameCount,c=a.frameRate,e=a.iterationLimit;a=i(d("cometAnimationStateReducer").reducer,null,d("cometAnimationStateReducer").getInitialState);var f=a[0],g=a[1],j=f.shouldAnimate&&!f.hasAnimated,k=c*b;return h(function(){return{canAnimate:j,duration:k,nextAnimationIteration:function(){g({iterationLimit:e,type:"NEXT_ITERATION"})},startAnimation:function(){g({type:"START_ANIMATION"})}}},[j,k,e])}g["default"]=a}),98);
__d("useMemoByObjectVariables",["areEqual","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useMemo,i=b.useRef,j=b.useState,k=0;function a(a){var b=i(k),d=j(a),e=d[0];d=d[1];e=!c("areEqual")(a,e);e&&(b.current+=1,d(a));var f=h(function(){return a},[b.current]);return h(function(){return[f,b.current]},[f])}f.exports=a}),34);
__d("useCometAnimationTrigger",["react","useCometAnimationStateReducer","useMemoByObjectVariables"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useMemo,j=b.useRef;function k(a,b){b=b.hovered;return b===!0&&a.hover===!0?!0:!1}function a(a){var b=a.animationTriggers;a=babelHelpers.objectWithoutPropertiesLoose(a,["animationTriggers"]);var d=j(!1),e=c("useCometAnimationStateReducer")(a);a=c("useMemoByObjectVariables")(b);var f=a[0],g=i(function(){return f.hover===!0?function(){e.startAnimation()}:void 0},[e,f]),l=i(function(){if(d.current===!1&&f.load===!0)return function(){d.current=!0,e.startAnimation()}},[e,f]),m=h(function(a){return e.canAnimate||k(f,a)},[e,f]);return i(function(){return{duration:e.duration,getShouldAnimate:m,onHoverIn:g,onLoad:l,onNextAnimationIteration:e.nextAnimationIteration}},[e,m,g,l])}g["default"]=a}),98);
__d("useInvalidNumberThrowsViolation",["fb-error","useCometErrorProject"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){b===void 0&&(b="Unexpected invalid number value");var d=c("useCometErrorProject")();if(d==null)throw new Error("useInvalidNumberThrowsViolation can only be used if CometErrorProjectContext\n        has a provider in your component tree");if(!Number.isNaN(a)&&Number.isFinite(a))return a;throw c("fb-error").TAAL.blameToPreviousFrame(new Error(b))}g["default"]=a}),98);
__d("useSpriteAnimation",["stylex","unrecoverableViolation","useInvalidNumberThrowsViolation","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g){"use strict";var h=0;function i(a,b,c){return"__DYNAMIC__CometAnimatedSprite_"+a+"_"+b+"_"+c}function j(a){var b=a.frameCount,d=a.framesPerCol,e=a.framesPerRow;a=a.step;b=a/b*100;var f=a%e/e*100;a=Math.floor(a/e)/d*100;e=Number.isNaN(f)||Number.isNaN(a)||Number.isNaN(b)||!Number.isFinite(f)||!Number.isFinite(a)||!Number.isFinite(b);if(e===!0)throw c("unrecoverableViolation")("Invalid animation input provided.","comet_ui");return b+"% { transform: translate(-"+f+"%, -"+a+"%); }"}function k(a,b,d,e){var f=[];if(!Number.isFinite(b)||Number.isNaN(b))throw c("unrecoverableViolation")("Invalid framecount","comet_ui");for(var g=0;g<b;g++)f.push(j({frameCount:b,framesPerCol:d,framesPerRow:e,step:g}));if(f.length<=0)throw c("unrecoverableViolation")("There were no animation frames to create an animation.","comet_ui");return"\n  @keyframes "+a+" {\n    "+f.join("\n  ")+"\n  }\n"}function a(a,b,d){c("useInvalidNumberThrowsViolation")(a);c("useInvalidNumberThrowsViolation")(b);c("useInvalidNumberThrowsViolation")(d);var e=i(a,b,d);c("useLayoutEffect_SAFE_FOR_SSR")(function(){c("stylex").inject(k(e,a,b,d),h)},[e,a,b,d]);return e}g["default"]=a}),98);
__d("CometAnimatedSprite.react",["CometSpriteBase.react","react","useCometAnimationTrigger","useInvalidNumberThrowsViolation","useRefEffect","useSpriteAnimation","useVisibilityObserver"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.animationTriggers,d=a.frameCount,e=a.frameRate,f=a.framesPerCol,g=a.framesPerRow,i=a.repeatNumber;i=i===void 0?3:i;var j=a.spriteUri;a=babelHelpers.objectWithoutPropertiesLoose(a,["animationTriggers","frameCount","frameRate","framesPerCol","framesPerRow","repeatNumber","spriteUri"]);b=c("useCometAnimationTrigger")({animationTriggers:b,frameCount:d,frameRate:e,iterationLimit:i});var k=b.duration,l=b.getShouldAnimate;e=b.onHoverIn;i=b.onLoad;var m=b.onNextAnimationIteration,n=c("useSpriteAnimation")(d,f,g);b=c("useInvalidNumberThrowsViolation")(f*100);d=c("useInvalidNumberThrowsViolation")(g*100);f=c("useVisibilityObserver")({onVisible:i});g=c("useRefEffect")(function(a){a.addEventListener("animationiteration",m);return function(){a.removeEventListener("animationiteration",m)}},[m]);return h.jsx(c("CometSpriteBase.react"),babelHelpers["extends"]({},a,{animationStyle:function(a){return l(a)?{animationDuration:k+"ms",animationName:n}:{animation:"none"}},containerRef:f,imgHeight:b+"%",imgRef:g,imgWidth:d+"%",onHoverIn:e,src:j}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometAnimatedSticker.react",["CometAnimatedSprite.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.alt,d=a.frameCount,e=a.frameRate,f=a.framesPerCol,g=a.framesPerRow,i=a.uri;a=babelHelpers.objectWithoutPropertiesLoose(a,["alt","frameCount","frameRate","framesPerCol","framesPerRow","uri"]);return h.jsx(c("CometAnimatedSprite.react"),babelHelpers["extends"]({},a,{accessibilityCaption:b,frameCount:d,frameRate:e,framesPerCol:f,framesPerRow:g,spriteUri:i}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometStickerRelay.react",["fbt","CometAnimatedSticker.react","CometRelay","CometSpriteBase.react","CometStickerRelay_sticker.graphql","react","recoverableViolation","unrecoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useMemo;function a(a){var e=a.animationTriggers,f=a.sticker,g=a.style;a=babelHelpers.objectWithoutPropertiesLoose(a,["animationTriggers","sticker","style"]);f=d("CometRelay").useFragment(i!==void 0?i:i=b("CometStickerRelay_sticker.graphql"),f);var l=f.frame_count,m=f.frame_rate,n=f.frames_per_column,o=f.frames_per_row,p=f.image,q=f.label,r=f.pack;f=f.sprite_image;f=f==null?void 0:f.uri;var s=p==null?void 0:p.uri,t=p==null?void 0:p.width,u=p==null?void 0:p.height;p=r==null?void 0:r.name;r=k(function(){return typeof g==="function"?g({height:u,width:t}):g},[g,u,t]);q==null&&c("recoverableViolation")("Invalid label received in CometSticker","comet_ui");q=p!=null?h._(/*FBT_CALL*/"Figurinha {sticker name} de {pack name}"/*FBT_CALL*/,[h._param("pack name",p),h._param("sticker name",q)]):(p=q)!=null?p:"";if(f!=null)if(l!=null&&m!=null&&n!=null&&o!=null)return j.jsx(c("CometAnimatedSticker.react"),babelHelpers["extends"]({},a,{alt:q,animationTriggers:e,frameCount:l,frameRate:m,framesPerCol:n,framesPerRow:o,style:r,uri:f}));else c("recoverableViolation")("Invalid sticker animation data received","comet_ui");if(s==null)throw c("unrecoverableViolation")("Invalid sticker data received","comet_ui");return j.jsx(c("CometSpriteBase.react"),babelHelpers["extends"]({},a,{accessibilityCaption:q,src:s,style:r}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFICommentStickerAttachmentStyle.react",["CometRelay","CometStickerRelay.react","CometUFICommentStickerAttachmentStyle_styleTypeRenderer.graphql","UFI2ScaleRect","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useCallback,k=80;function a(a){a=a.styleTypeRenderer;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometUFICommentStickerAttachmentStyle_styleTypeRenderer.graphql"),a);a=a.attachment;a=a==null?void 0:a.media;var e=j(function(a){var b=a.height;a=a.width;return d("UFI2ScaleRect").scaleToContain({gracefullyFallbackToMaxDimensionWhenHeightOrWidthIsZero:!1,maxHeight:k,maxWidth:k,srcHeight:(b=b)!=null?b:k,srcWidth:(b=a)!=null?b:k})},[]);if(a==null){c("recoverableViolation")("CometUFICommentStickerAvatarAttachmentStyle: Tried to render a sticker, but attachment information is null.","ufi2");return null}return i.jsx(c("CometStickerRelay.react"),{animationTriggers:{hover:!0,load:!0},sticker:a,style:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);