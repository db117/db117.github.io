(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{310:function(a,t,r){"use strict";r.r(t);var s=r(10),e=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"xx-perfdisablesharedmem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xx-perfdisablesharedmem"}},[a._v("#")]),a._v(" -XX:+PerfDisableSharedMem")]),a._v(" "),t("p",[a._v("该参数决定了存储PerfData的内存是不是可以被共享，也就是说不管这个参数设置没设置，jvm在启动的时候都会分配一块内存来存PerfData，只是说这个PerfData是不是其他进程可见的问题，如果设置了这个参数，说明不能被共享，此时其他进程将访问不了该内存，这样一来，譬如我们jps，jstat等都无法工作。默认这个参数是关闭的，也就是默认支持共享的方式")]),a._v(" "),t("h3",{attrs:{id:"xx-useperfdata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xx-useperfdata"}},[a._v("#")]),a._v(" -XX:-UsePerfData")]),a._v(" "),t("p",[a._v("如果关闭了UsePerfData这个参数，那么jvm启动过程中perf memory都不会被创建，默认情况是是打开的")]),a._v(" "),t("h3",{attrs:{id:"xx-printflagsfinal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xx-printflagsfinal"}},[a._v("#")]),a._v(" -XX:+PrintFlagsFinal")]),a._v(" "),t("p",[a._v("打印最终使用的jvm参数")]),a._v(" "),t("h3",{attrs:{id:"xx-printflagsinitial"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xx-printflagsinitial"}},[a._v("#")]),a._v(" -XX:+PrintFlagsInitial")]),a._v(" "),t("p",[a._v("打印默认参数")]),a._v(" "),t("h3",{attrs:{id:"xx-printcommandlineflags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xx-printcommandlineflags"}},[a._v("#")]),a._v(" -XX:+PrintCommandLineFlags")]),a._v(" "),t("p",[a._v("打印用户设置的参数")])])}),[],!1,null,null,null);t.default=e.exports}}]);