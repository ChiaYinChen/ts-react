.PHONY: build

build:
		rm -rf ./build ;\
		docker build -t ts-react/ui:test . ;\
		docker create -it --name ui_tmp ts-react/ui:test ;\
		docker cp ui_tmp:/ui/build . ;\
		docker rm -f ui_tmp ;

up:
		make build
		docker-compose -f docker-compose.yml up -d

down:
		docker-compose -f docker-compose.yml down
