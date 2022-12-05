(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{371:function(e,s,n){"use strict";n.r(s);var a=n(10),t=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/prometheus-operator/kube-prometheus",target:"_blank",rel:"noopener noreferrer"}},[e._v("kube-prometheus"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("该项目使用"),s("code",[e._v("jsonnet")]),e._v("编写，上手有一定难度。")]),e._v(" "),s("p",[e._v("主要是在 k8s 中部署监控的一系列工具。")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/prometheus-operator/prometheus-operator",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus Operator"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("高可用 "),s("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("高可用 "),s("a",{attrs:{href:"https://github.com/prometheus/alertmanager",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alertmanager"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/prometheus/node_exporter",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus node-exporter"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/DirectXMan12/k8s-prometheus-adapter",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus Adapter for Kubernetes Metrics APIs"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/kubernetes/kube-state-metrics",target:"_blank",rel:"noopener noreferrer"}},[e._v("kube-state-metrics"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://grafana.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grafana"),s("OutboundLink")],1)])])]),e._v(" "),s("h2",{attrs:{id:"简单使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单使用"}},[e._v("#")]),e._v(" 简单使用")]),e._v(" "),s("blockquote",[s("p",[e._v("对默认的没有特别的要求情况下可以直接使用")])]),e._v(" "),s("h3",{attrs:{id:"前置条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[e._v("#")]),e._v(" 前置条件")]),e._v(" "),s("ul",[s("li",[e._v("go环境")]),e._v(" "),s("li",[e._v("安装jb(jsonnet-bundler)\n"),s("ul",[s("li",[e._v("使用go安装"),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("go get github.com/jsonnet-bundler/jsonnet-bundler/cmd/jb\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[e._v("使用brewhome安装"),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v(" brew "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" jsonnet-bundler\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])])]),e._v(" "),s("li",[e._v("gojsontoyaml安装"),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("go get github.com/brancz/gojsontoyaml\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])]),e._v(" "),s("h3",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("修改配置文件")]),e._v(" "),s("blockquote",[s("p",[e._v("example.jsonnet")])])]),e._v(" "),s("li",[s("p",[e._v("生成文件")]),e._v(" "),s("blockquote",[s("p",[e._v("运行"),s("code",[e._v("./build.sh example.jsonnet")]),e._v(" 会在"),s("code",[e._v("manifests")]),e._v("目录生成配置文件")])])]),e._v(" "),s("li",[s("p",[e._v("格式化.jsonnet")]),e._v(" "),s("blockquote",[s("p",[e._v("需要安装jsonnetfmt")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  git clone git@github.com:google/go-jsonnet.git\n  cd go-jsonnet\n  go build ./cmd/jsonnetfmt\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("blockquote",[s("p",[e._v("使用vsCode的"),s("code",[e._v("jsonnet Formatter")]),e._v("插件\n或者使用下面代码直接格式化")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" jsonnetfmt --indent 2 --max-blank-lines 2 --sort-imports --string-style s --comment-style s -i test.jsonnet  \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])]),e._v(" "),s("h3",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[e._v("#")]),e._v(" 注意事项")]),e._v(" "),s("ul",[s("li",[e._v("vendor目录是jb生成的")]),e._v(" "),s("li",[e._v("除配置文件都是从github上面copy的不需要修改直接"),s("code",[e._v("jb update")])])]),e._v(" "),s("h2",{attrs:{id:"自定义配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义配置"}},[e._v("#")]),e._v(" 自定义配置")]),e._v(" "),s("blockquote",[s("p",[e._v("默认的配置,不满足的情况下。")]),e._v(" "),s("p",[e._v("实际上都是对生成的文件进行修改，如果不想写配置文件，可以直接对生成的文件进行修改使用。")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("local filter = {\n  // 过滤某些通知，也可以对 alertmanager-config.yaml 添加抑制配置\n  kubernetesControlPlane+:: {\n    prometheusRule+: {\n      spec+: {\n        groups: std.filter(\n          function(group)\n            group.name != 'kubernetes-system-scheduler'\n            && group.name != 'kubernetes-system-controller-manager',\n          super.groups\n        ),\n      },\n    },\n  },\n};\n\nlocal update = {\n\t// 对默认的配置进行修改\n  // 调整报警阈值\n  kubernetesControlPlane+:: {\n    prometheusRule+: {\n      spec+: {\n        groups: std.map(\n          function(group)\n            if group.name == 'kubernetes-resources' then\n              group {\n                rules: std.map(\n                  function(rule)\n                    if rule.alert == 'CPUThrottlingHigh' then\n                      rule {\n                        expr: |||\nsum(increase(container_cpu_cfs_throttled_periods_total{container!=\"\", }[5m])) by (container, pod, namespace)\n                            /\n                          sum(increase(container_cpu_cfs_periods_total{}[5m])) by (container, pod, namespace)\n                            > ( 70 / 100 )\n                        |||,\n                      }\n                    else\n                      rule,\n                  group.rules\n                ),\n              }\n            else\n              group,\n          super.groups\n        ),\n      },\n    },\n  },\n};\n\nlocal kp =\n  (import 'kube-prometheus/main.libsonnet') +\n  (import 'kube-prometheus/addons/all-namespaces.libsonnet') + // 监听全部命名空间\n  {\n    values+:: {\n      common+: {\n        namespace: 'monitoring',  // 工作命名空间\n        images+: {\n          // 替换镜像\n          kubeStateMetrics: 'bitnami/kube-state-metrics:' + $.values.common.versions.kubeStateMetrics,\n        },\n      },\n      alertmanager+: {\n        config: importstr 'alertmanager-config.yaml',  // alertmanager 配置文件\n        replicas: 1,\n      },\n    },\n    // 添加储存类\n    prometheus+:: {\n      prometheus+: {\n        spec+: {\n          retention: '30d',\n          replicas: 1,\n          storage: {\n            volumeClaimTemplate: {\n              apiVersion: 'v1',\n              kind: 'PersistentVolumeClaim',\n              spec: {\n                accessModes: ['ReadWriteOnce'],\n                resources: { requests: { storage: '100Gi' } },\n                storageClassName: 'nfs-dynamic-class',\n              },\n            },\n          },  // storage\n        },  // spec\n      },  // prometheus\n    },  // prometheus\n  } + filter + update;\n\n// 下面的不要动\n{ 'setup/0namespace-namespace': kp.kubePrometheus.namespace } +\n{\n  ['setup/prometheus-operator-' + name]: kp.prometheusOperator[name]\n  for name in std.filter((function(name) name != 'serviceMonitor' && name != 'prometheusRule'), std.objectFields(kp.prometheusOperator))\n} +\n// serviceMonitor and prometheusRule are separated so that they can be created after the CRDs are ready\n{ 'prometheus-operator-serviceMonitor': kp.prometheusOperator.serviceMonitor } +\n{ 'prometheus-operator-prometheusRule': kp.prometheusOperator.prometheusRule } +\n{ 'kube-prometheus-prometheusRule': kp.kubePrometheus.prometheusRule } +\n{ ['alertmanager-' + name]: kp.alertmanager[name] for name in std.objectFields(kp.alertmanager) } +\n{ ['blackbox-exporter-' + name]: kp.blackboxExporter[name] for name in std.objectFields(kp.blackboxExporter) } +\n{ ['grafana-' + name]: kp.grafana[name] for name in std.objectFields(kp.grafana) } +\n{ ['kube-state-metrics-' + name]: kp.kubeStateMetrics[name] for name in std.objectFields(kp.kubeStateMetrics) } +\n{ ['kubernetes-' + name]: kp.kubernetesControlPlane[name] for name in std.objectFields(kp.kubernetesControlPlane) }\n{ ['node-exporter-' + name]: kp.nodeExporter[name] for name in std.objectFields(kp.nodeExporter) } +\n{ ['prometheus-' + name]: kp.prometheus[name] for name in std.objectFields(kp.prometheus) } +\n{ ['prometheus-adapter-' + name]: kp.prometheusAdapter[name] for name in std.objectFields(kp.prometheusAdapter) }\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br"),s("span",{staticClass:"line-number"},[e._v("48")]),s("br"),s("span",{staticClass:"line-number"},[e._v("49")]),s("br"),s("span",{staticClass:"line-number"},[e._v("50")]),s("br"),s("span",{staticClass:"line-number"},[e._v("51")]),s("br"),s("span",{staticClass:"line-number"},[e._v("52")]),s("br"),s("span",{staticClass:"line-number"},[e._v("53")]),s("br"),s("span",{staticClass:"line-number"},[e._v("54")]),s("br"),s("span",{staticClass:"line-number"},[e._v("55")]),s("br"),s("span",{staticClass:"line-number"},[e._v("56")]),s("br"),s("span",{staticClass:"line-number"},[e._v("57")]),s("br"),s("span",{staticClass:"line-number"},[e._v("58")]),s("br"),s("span",{staticClass:"line-number"},[e._v("59")]),s("br"),s("span",{staticClass:"line-number"},[e._v("60")]),s("br"),s("span",{staticClass:"line-number"},[e._v("61")]),s("br"),s("span",{staticClass:"line-number"},[e._v("62")]),s("br"),s("span",{staticClass:"line-number"},[e._v("63")]),s("br"),s("span",{staticClass:"line-number"},[e._v("64")]),s("br"),s("span",{staticClass:"line-number"},[e._v("65")]),s("br"),s("span",{staticClass:"line-number"},[e._v("66")]),s("br"),s("span",{staticClass:"line-number"},[e._v("67")]),s("br"),s("span",{staticClass:"line-number"},[e._v("68")]),s("br"),s("span",{staticClass:"line-number"},[e._v("69")]),s("br"),s("span",{staticClass:"line-number"},[e._v("70")]),s("br"),s("span",{staticClass:"line-number"},[e._v("71")]),s("br"),s("span",{staticClass:"line-number"},[e._v("72")]),s("br"),s("span",{staticClass:"line-number"},[e._v("73")]),s("br"),s("span",{staticClass:"line-number"},[e._v("74")]),s("br"),s("span",{staticClass:"line-number"},[e._v("75")]),s("br"),s("span",{staticClass:"line-number"},[e._v("76")]),s("br"),s("span",{staticClass:"line-number"},[e._v("77")]),s("br"),s("span",{staticClass:"line-number"},[e._v("78")]),s("br"),s("span",{staticClass:"line-number"},[e._v("79")]),s("br"),s("span",{staticClass:"line-number"},[e._v("80")]),s("br"),s("span",{staticClass:"line-number"},[e._v("81")]),s("br"),s("span",{staticClass:"line-number"},[e._v("82")]),s("br"),s("span",{staticClass:"line-number"},[e._v("83")]),s("br"),s("span",{staticClass:"line-number"},[e._v("84")]),s("br"),s("span",{staticClass:"line-number"},[e._v("85")]),s("br"),s("span",{staticClass:"line-number"},[e._v("86")]),s("br"),s("span",{staticClass:"line-number"},[e._v("87")]),s("br"),s("span",{staticClass:"line-number"},[e._v("88")]),s("br"),s("span",{staticClass:"line-number"},[e._v("89")]),s("br"),s("span",{staticClass:"line-number"},[e._v("90")]),s("br"),s("span",{staticClass:"line-number"},[e._v("91")]),s("br"),s("span",{staticClass:"line-number"},[e._v("92")]),s("br"),s("span",{staticClass:"line-number"},[e._v("93")]),s("br"),s("span",{staticClass:"line-number"},[e._v("94")]),s("br"),s("span",{staticClass:"line-number"},[e._v("95")]),s("br"),s("span",{staticClass:"line-number"},[e._v("96")]),s("br"),s("span",{staticClass:"line-number"},[e._v("97")]),s("br"),s("span",{staticClass:"line-number"},[e._v("98")]),s("br"),s("span",{staticClass:"line-number"},[e._v("99")]),s("br"),s("span",{staticClass:"line-number"},[e._v("100")]),s("br"),s("span",{staticClass:"line-number"},[e._v("101")]),s("br"),s("span",{staticClass:"line-number"},[e._v("102")]),s("br"),s("span",{staticClass:"line-number"},[e._v("103")]),s("br"),s("span",{staticClass:"line-number"},[e._v("104")]),s("br"),s("span",{staticClass:"line-number"},[e._v("105")]),s("br"),s("span",{staticClass:"line-number"},[e._v("106")]),s("br"),s("span",{staticClass:"line-number"},[e._v("107")]),s("br"),s("span",{staticClass:"line-number"},[e._v("108")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);