const defaultRpaDiagram = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bpmn2:definitions xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:bpmn2=\"http://www.omg.org/spec/BPMN/20100524/MODEL\" xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\" xmlns:dc=\"http://www.omg.org/spec/DD/20100524/DC\" xmlns:di=\"http://www.omg.org/spec/DD/20100524/DI\" xmlns:rpa=\"http://some-company/schema/bpmn/rpa\" id=\"sample-diagram\" targetNamespace=\"http://bpmn.io/schema/bpmn\" xsi:schemaLocation=\"http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd\"><bpmn2:process id=\"Process_1\" isExecutable=\"false\"><bpmn2:startEvent id=\"StartEvent_1\"><bpmn2:outgoing>Flow_0pomixp</bpmn2:outgoing></bpmn2:startEvent><bpmn2:task id=\"Activity_1ftvt3q\" name=\"GSuiteGetEmails\" rpa:operation=\"GSuiteGetEmails\"><bpmn2:incoming>Flow_0pomixp</bpmn2:incoming><bpmn2:outgoing>Flow_0fpim9w</bpmn2:outgoing></bpmn2:task><bpmn2:sequenceFlow id=\"Flow_0pomixp\" sourceRef=\"StartEvent_1\" targetRef=\"Activity_1ftvt3q\" /><bpmn2:exclusiveGateway id=\"Gateway_19smgdd\"><bpmn2:incoming>Flow_0fpim9w</bpmn2:incoming><bpmn2:outgoing>Flow_1js0m8h</bpmn2:outgoing><bpmn2:outgoing>Flow_1p77geq</bpmn2:outgoing></bpmn2:exclusiveGateway><bpmn2:sequenceFlow id=\"Flow_0fpim9w\" sourceRef=\"Activity_1ftvt3q\" targetRef=\"Gateway_19smgdd\" /><bpmn2:task id=\"Activity_02xnb0y\" name=\"Oben\"><bpmn2:incoming>Flow_1js0m8h</bpmn2:incoming><bpmn2:outgoing>Flow_0xndx6x</bpmn2:outgoing></bpmn2:task><bpmn2:sequenceFlow id=\"Flow_1js0m8h\" sourceRef=\"Gateway_19smgdd\" targetRef=\"Activity_02xnb0y\" /><bpmn2:task id=\"Activity_1nyp1o0\" name=\"Unten\"><bpmn2:incoming>Flow_1p77geq</bpmn2:incoming><bpmn2:outgoing>Flow_0s2xydh</bpmn2:outgoing></bpmn2:task><bpmn2:sequenceFlow id=\"Flow_1p77geq\" sourceRef=\"Gateway_19smgdd\" targetRef=\"Activity_1nyp1o0\" /><bpmn2:exclusiveGateway id=\"Gateway_1jigrfa\"><bpmn2:incoming>Flow_0s2xydh</bpmn2:incoming><bpmn2:incoming>Flow_0xndx6x</bpmn2:incoming><bpmn2:outgoing>Flow_10oa2nr</bpmn2:outgoing></bpmn2:exclusiveGateway><bpmn2:sequenceFlow id=\"Flow_0s2xydh\" sourceRef=\"Activity_1nyp1o0\" targetRef=\"Gateway_1jigrfa\" /><bpmn2:sequenceFlow id=\"Flow_0xndx6x\" sourceRef=\"Activity_02xnb0y\" targetRef=\"Gateway_1jigrfa\" /><bpmn2:endEvent id=\"Event_0jtl2km\"><bpmn2:incoming>Flow_10oa2nr</bpmn2:incoming></bpmn2:endEvent><bpmn2:sequenceFlow id=\"Flow_10oa2nr\" sourceRef=\"Gateway_1jigrfa\" targetRef=\"Event_0jtl2km\" /></bpmn2:process><bpmndi:BPMNDiagram id=\"BPMNDiagram_1\"><bpmndi:BPMNPlane id=\"BPMNPlane_1\" bpmnElement=\"Process_1\"><bpmndi:BPMNEdge id=\"Flow_0pomixp_di\" bpmnElement=\"Flow_0pomixp\"><di:waypoint x=\"448\" y=\"258\" /><di:waypoint x=\"500\" y=\"258\" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge id=\"Flow_0fpim9w_di\" bpmnElement=\"Flow_0fpim9w\"><di:waypoint x=\"600\" y=\"258\" /><di:waypoint x=\"655\" y=\"258\" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge id=\"Flow_1js0m8h_di\" bpmnElement=\"Flow_1js0m8h\"><di:waypoint x=\"680\" y=\"233\" /><di:waypoint x=\"680\" y=\"190\" /><di:waypoint x=\"760\" y=\"190\" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge id=\"Flow_1p77geq_di\" bpmnElement=\"Flow_1p77geq\"><di:waypoint x=\"680\" y=\"283\" /><di:waypoint x=\"680\" y=\"370\" /><di:waypoint x=\"760\" y=\"370\" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge id=\"Flow_0s2xydh_di\" bpmnElement=\"Flow_0s2xydh\"><di:waypoint x=\"860\" y=\"370\" /><di:waypoint x=\"930\" y=\"370\" /><di:waypoint x=\"930\" y=\"295\" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge id=\"Flow_0xndx6x_di\" bpmnElement=\"Flow_0xndx6x\"><di:waypoint x=\"860\" y=\"190\" /><di:waypoint x=\"930\" y=\"190\" /><di:waypoint x=\"930\" y=\"245\" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge id=\"Flow_10oa2nr_di\" bpmnElement=\"Flow_10oa2nr\"><di:waypoint x=\"955\" y=\"270\" /><di:waypoint x=\"1002\" y=\"270\" /></bpmndi:BPMNEdge><bpmndi:BPMNShape id=\"_BPMNShape_StartEvent_2\" bpmnElement=\"StartEvent_1\"><dc:Bounds x=\"412\" y=\"240\" width=\"36\" height=\"36\" /></bpmndi:BPMNShape><bpmndi:BPMNShape id=\"Activity_1ftvt3q_di\" bpmnElement=\"Activity_1ftvt3q\"><dc:Bounds x=\"500\" y=\"218\" width=\"100\" height=\"80\" /></bpmndi:BPMNShape><bpmndi:BPMNShape id=\"Gateway_19smgdd_di\" bpmnElement=\"Gateway_19smgdd\" isMarkerVisible=\"true\"><dc:Bounds x=\"655\" y=\"233\" width=\"50\" height=\"50\" /></bpmndi:BPMNShape><bpmndi:BPMNShape id=\"Activity_02xnb0y_di\" bpmnElement=\"Activity_02xnb0y\"><dc:Bounds x=\"760\" y=\"150\" width=\"100\" height=\"80\" /><bpmndi:BPMNLabel /></bpmndi:BPMNShape><bpmndi:BPMNShape id=\"Activity_1nyp1o0_di\" bpmnElement=\"Activity_1nyp1o0\"><dc:Bounds x=\"760\" y=\"330\" width=\"100\" height=\"80\" /><bpmndi:BPMNLabel /></bpmndi:BPMNShape><bpmndi:BPMNShape id=\"Gateway_1jigrfa_di\" bpmnElement=\"Gateway_1jigrfa\" isMarkerVisible=\"true\"><dc:Bounds x=\"905\" y=\"245\" width=\"50\" height=\"50\" /></bpmndi:BPMNShape><bpmndi:BPMNShape id=\"Event_0jtl2km_di\" bpmnElement=\"Event_0jtl2km\"><dc:Bounds x=\"1002\" y=\"252\" width=\"36\" height=\"36\" /></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn2:definitions>`;

export default defaultRpaDiagram;
