# Kubricate Demo Repo

This repository contains a step-by-step demo of how to build **type-safe, declarative, and reusable Kubernetes infrastructure** using [Kubricate](https://github.com/thaitype/kubricate), a TypeScript-based infrastructure framework.

> 🧱 Forget fragile YAML.
> 
> ✨ Compose infrastructure like software.
>
> ☁️ Deploy seamlessly to AKS and beyond.

## 🧭 Project Structure Overview

```
.
├── 1-basic          # Intro to Kubricate: using prebuilt stacks
├── 2-custom-stacks  # Creating reusable stacks with createStack
├── 3-secret         # Managing secrets with SecretManager, Connectors, and Providers
└── demo/WebApi      # Sample .NET Web API used for demonstration
```

## 📦 What You'll Learn

| Folder            | Focus                                          | Concepts Introduced                                  |
| ----------------- | ---------------------------------------------- | ---------------------------------------------------- |
| `1-basic`         | Deploying with built-in stacks                 | `SimpleAppStack`, `NamespaceStack`                   |
| `2-custom-stacks` | Creating custom reusable stacks                | `createStack`, `ResourceComposer`                    |
| `3-secret`        | Managing secrets declaratively and securely    | `SecretManager`, `useSecrets`, connectors, providers |
| `demo/WebApi`     | A sample .NET app containerized for deployment | Docker, K8s deployment target                        |

## 🚀 Requirements

* Node.js (>= 20)
* Kubernetes cluster (e.g., AKS)
* `kubectl` configured to access your cluster
* Optional: `.env` file for secrets when using `3-secret`

## 🛠️ Getting Started

Each folder contains its own `README.md` with setup and usage instructions.
To begin, navigate to one of the examples:

```bash
cd 1-basic
npm install
bunx kubricate generate --stdout | kubectl apply -f -
```

## 🔐 Secure by Design

Kubricate introduces a powerful secret management layer, allowing you to:

* Declare what secrets you need (`addSecret`)
* Choose how to fetch them (`Connector`)
* Choose how to inject them (`Provider`)
* Keep secrets out of your codebase

All in a **type-safe, centralized contract**.

## 📚 Related Links

* 🛠️ [Kubricate on GitHub](https://github.com/thaitype/kubricate)
* 📖 [Kubricate Documentation (Website)](https://kubricate.thaitype.dev)
* 🎤 [Global Azure 2025 Thailand Event](https://global-azure-2025-thailand.sessionize.com)

## 🧡 Special Thanks

Built with love by [@mildronize](https://github.com/mildronize) for the Azure Global 2025 community.
Questions or ideas? Feel free to reach out!

## Old Kubricate Demo Version
- [Kubricate Demo v0.19 at branch demo-v0.19](https://github.com/thaitype/kubricate-demo/tree/demo-v0.19)